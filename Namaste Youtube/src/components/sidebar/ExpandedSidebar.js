import React from "react";
import ExploreMenuItem from "./ExploreMenuItem.js";
import MainMenuItem from "./MainMenuItem.js";
import MoreMenuItem from "./MoreMenuItem.js";
import SubscriptionsMenuItem from "./SubscriptionsMenuItem.js";
import YouMenuItem from "./YouMenuItem.js";

export default function ExpandedSidebar() {
    return (
        <div className="p-5 shadow-xl shadow-gray-400 w-56 h-[34.4rem] overflow-y-auto sidebar-scroll">
            <MainMenuItem />
            <YouMenuItem />
            <SubscriptionsMenuItem />
            <ExploreMenuItem />
            <MoreMenuItem />
        </div>
    );
};
