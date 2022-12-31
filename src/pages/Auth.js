import React from 'react';
import { Routes, Route } from "react-router-dom"
// 
import AuthLayout from "../components/AuthLayout";
import SignIn from "../components/AuthForm/SignIn";
import Register from "../components/AuthForm/Register";
import CreateClient from "../components/AuthForm/CreateClient";
import CreateTranslator from "../components/AuthForm/CreateTranslator";

const Auth = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<SignIn />} />
                    <Route path="sign-up" element={<Register />} />
                    <Route path="create-client" element={<CreateClient />} />
                    <Route path="create-translator" element={<CreateTranslator />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Auth