import React from "react";

function PostForm() {
	return (
		<form id="form" action="/create" method="POST">
			<input id="author" name="author" type="text" placeholder="Your name" />
			<input id="message" name="message" type="text" placeholder="Type your post here" />
			<input type="submit" />
		</form>
	);
}

export default PostForm;
