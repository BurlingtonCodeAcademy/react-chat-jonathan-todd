import React from "react";

function SinglePost(props) {
	return (
		<div>
			{props.postContent.parsedTime} {props.postContent.author} {props.postContent.message}
		</div>
	);
}

export default SinglePost;

