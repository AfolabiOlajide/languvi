import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Home/Layout';
import LandingPage from '../components/Home/LandingPage';

const Home = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Home