import React, { useEffect, useState } from "react";
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from "./component/Header.js";
import UserContext from "./store/UserContext.js";
import appStore from "./store/appStore.js";

export default function App() {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Prathamesh Nimje",
        };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
}