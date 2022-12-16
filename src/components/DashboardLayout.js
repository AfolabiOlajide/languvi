import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <div className="dashboard-menu">Menu</div>
            <div className="view">
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout