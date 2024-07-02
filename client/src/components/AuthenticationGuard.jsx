// code from https://github.com/auth0-developer-hub/spa_react_javascript_hello-world/blob/basic-authentication-with-api-integration/src/app.js

import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { PageLoader } from "./Pages/PageLoader/PageLoader";

export const AuthenticationGuard = ({component: Component, ...rest}) => {
    const AuthenticatedComponent = withAuthenticationRequired(Component, {
        onRedirecting: () => (<div>
            <PageLoader/>
        </div>),
    });

    return <AuthenticatedComponent {...rest} />;
};