import React from "react";
import Comment from "./Comment";

function CommentList(props){
    return (
        <div>
            <Comment name={"정승민"} comment={"🐋🐶😺"}/>
            <Comment name={"조인희"}comment={"리액트 재밌어요"}/>
            <Comment name={"이채현"}comment={"頑張って勉強します"}/>
            <Comment name={"박지연"}comment={"컴공과의 미래는 밝다!"}/>
        </div>
    );
}
export default CommentList;