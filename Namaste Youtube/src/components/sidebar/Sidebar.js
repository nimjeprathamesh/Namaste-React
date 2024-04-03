import React from "react";
import { useSelector } from 'react-redux';
import CollapsedSidebar from "./CollapsedSidebar.js";
import ExpandedSidebar from "./ExpandedSidebar.js";

export default function Sidebar() {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    return (
        <div className="col-span-1">
            {isMenuOpen ? <ExpandedSidebar /> : <CollapsedSidebar />}
        </div>
    );
};
