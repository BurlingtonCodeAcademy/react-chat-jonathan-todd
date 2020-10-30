import React from "react";

function PostForm() {
	return (
		<form id="form" action="http://localhost:8000/create" method="POST">
			<input id="firstPost" type="text" placeholder="Type your post here" />
			<input type="submit" />
		</form>
	);
}

export default PostForm;
