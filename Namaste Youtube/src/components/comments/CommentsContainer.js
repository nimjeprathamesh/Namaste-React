import React from "react";
import CommentList from "./CommentList.js";
import commentsData from "./CommentsData.js";

export default function CommentsContainer() {
    return (
        <div className="py-5 px-2 w-[740px]">
            <h1 className="font-bold text-xl">Comments:</h1>
            <CommentList comments={commentsData} />
        </div>
    );
};