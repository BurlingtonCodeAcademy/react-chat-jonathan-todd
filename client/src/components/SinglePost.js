import React from "react";

function SinglePost(props) {

	// Render a post entry on the page;  Using seperate component allows us to handle formating, field order, etc.
	return (
		<div id="single-post">
			<div id="author">{props.postContent.author}  {props.postContent.parsedTime}</div><div id="message">{props.postContent.message}</div>
			<br></br>
		</div>
	);
}

export default SinglePost;
