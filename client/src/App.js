import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './utils/variables.css';
import MainView from './components/MainView/MainView';
import ChatsView from './components/ChatView/ChatView';
import { AuthenticationGuard } from './components/AuthenticationGuard';
import { useAuth0 } from '@auth0/auth0-react';
import LoginView from './components/Auth/Login/LoginView';
import { statusCheck } from './utils/utils';

function App(){
  const {user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      async function addUserToDatabase() {
        try {
          const response = await fetch('/chatbot/users/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: user.email,
              firstName: user["given_name"],
              lastName: user["family_name"],
              username: user.nickname
            }),
          });

          await statusCheck(response);
        } catch (error) {
          console.error('Error adding user to database:', error);
        }
      }

      async function getUserInfo() {
        try {
          const response = await fetch('/chatbot/users/get-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: user.email
            }),
          });

          await statusCheck(response);
          const res = await response.json();
          setCurrUser(res);
        } catch (error) {
          console.error('Error adding user to database:', error);
        }
      }

      addUserToDatabase();
      getUserInfo();
    }
  }, [getAccessTokenSilently, isAuthenticated])

  if (!isAuthenticated) {
    return <LoginView />
  }

  return(
    isAuthenticated && (
      <div>
        <main>
          <Routes>
            <Route path={'/MainView'} element={<AuthenticationGuard component={MainView} user={currUser} />}/>
            <Route path={'/ChatView'} element={<AuthenticationGuard component={ChatsView} />}/>
          </Routes>
        </main>
      </div>
    )
  )
}

export default App;
