import React from "react";
import ButtonList from "./ButtonList.js";
import VideoContainer from "./VideoContainer.js";

export default function MainContainer() {
    return (
        <div className="col-span-11">
            <ButtonList />
            <VideoContainer />
        </div>
    );
};
