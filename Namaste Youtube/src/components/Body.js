import React from "react";
import { Outlet } from 'react-router-dom';
import Sidebar from "./sidebar/Sidebar.js";

export default function Body() {
    return (
        <div className="grid grid-flow-col">
            <Sidebar />
            <Outlet />
        </div>
    );
};