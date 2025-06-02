// src/pages/Dashboard.tsx
import React from "react";

const Dashboard: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Umsatz</h2>
                    <p className="text-2xl">€12,345</p>

                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Nutzer</h2>
                    <p className="text-2xl">1,234</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Bestellungen</h2>
                    <p className="text-2xl">567</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
