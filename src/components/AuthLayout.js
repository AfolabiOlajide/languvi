import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <div className="outlet">
                <Outlet />
            </div>
            <div className="design">
                <h1>Hello World</h1>
            </div>
        </div>
    )
}

export default AuthLayout