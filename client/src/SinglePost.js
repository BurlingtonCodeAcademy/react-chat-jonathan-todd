import React from "react";

function SinglePost(props) {
	return (
		//the order in which we want messages to display in the window
		<div id="single-post">
			{props.postContent.parsedTime} {props.postContent.author} {props.postContent.message}
		</div>
	);
}
<<<<<<< HEAD

export default SinglePost;

=======

export default SinglePost;
>>>>>>> d7043615d2fe34b7abe9656eccbe5f2e67abdc3b
