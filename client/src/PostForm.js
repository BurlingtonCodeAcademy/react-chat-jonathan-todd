import React from "react";

function PostForm() {
	return (
		//the general form for making a chat post
		<form id="form" action="/create" method="POST">
			<input id="author" name="author" type="text" placeholder="Your name" />
			<input id="message" name="message" type="text" placeholder="Type your post here" />
			<button id="submit-button" type="submit" />
		</form>
	);
}

export default PostForm;
