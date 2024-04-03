import React from "react";
import Comment from "./Comment.js";

export default function CommentList({comments}) {
    return (
        <>
            {comments.map((comment, index) => (
                <div key={index}>
                    <Comment data={comment} />
                    <div className="pl-2 ml-10 border border-l-black border-t-0 border-b-0 border-r-0">
                        <CommentList comments={comment.replies} />
                    </div>
                </div>
            ))}
        </>
    );
};