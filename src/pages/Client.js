import React from 'react';
import { Routes, Route } from 'react-router-dom';
// 
import DashboardLayout from "../components/DashboardLayout";
import ContactUs from "../components/ClientDashboard/ContactUsContainer/ContactUs";
import Offers from "../components/ClientDashboard/OffersContainer/Offers";
import Orders from "../components/ClientDashboard/OrdersContainer/Orders";
import Revisions from "../components/ClientDashboard/RevisionsContainer/Revisions";
import Settings  from "../components/ClientDashboard/SettingsContainer/Settings";
import Dashboard from "../components/ClientDashboard/DashboardContainer/Dashboard"

const Client = () => {
    return (
        <div>
            <Routes>
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="contact-us" element={<ContactUs />} />
                    <Route path="offers" element={<Offers />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="revisions" element={<Revisions />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Client