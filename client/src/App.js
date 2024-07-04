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
  const [currUser, setCurrUser] = useState('spongebob');

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

      async function getMsgs() {
        console.log(user.email);
        try{
          const accessToken = await getAccessTokenSilently();
          let res = await fetch('/chatbot/messages', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: user.email
            })
          });
          await statusCheck(res);
          res = await res.json();
          console.log(res);
        }catch(err) {
          console.error(err);
        }
      }

      addUserToDatabase();
      getMsgs();
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
