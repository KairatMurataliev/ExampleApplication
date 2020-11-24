import React from 'react';
import {NotificationContainer} from 'react-notifications';
import Header from "../Header/Header";

const Layout = props => {
    return (
        <div>
            <NotificationContainer/>
            <Header/>
            <main style={{marginTop: '20px'}}>
                {props.children}
            </main>
        </div>
    );
};

export default Layout;
