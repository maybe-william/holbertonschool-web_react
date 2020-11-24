import React from 'react';
import ReactDOM from 'react-dom';

const defaultUser = {
    email: "",
    password: "",
    isLoggedIn: false,
};
const defaultLogOut = () => undefined;

const AppContext = React.createContext({
    user: defaultUser,
    logOut: defaultLogOut,
});

export default AppContext;
