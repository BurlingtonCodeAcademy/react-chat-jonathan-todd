import React from "react";

function SinglePost(props) {
	return (
		//the order in which we want messages to display in the window
		<div id="single-post">
			{props.postContent.parsedTime} {props.postContent.author} {props.postContent.message}
		</div>
	);
}

export default SinglePost;