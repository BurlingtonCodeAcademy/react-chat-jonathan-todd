import React from "react";

function PostForm(props) {


	// A cookie is being used to preserve the channel a user is in 
	let channel = document.cookie.split('; ').find(row => row.startsWith('channel')).split('=')[1];

	// Render the form to allow user to post a chat entry
	return (
		//the general form for making a chat post
		<div id="form-wrapper">
			<form id="form" action={"/create/" + props.channelSelected} method="POST">
				<input id="author" name="author" type="text" placeholder="Your name" />
				<input id="message" name="message" type="text" placeholder="Type your post here" />
				<input id="channel" name="channel" value={channel.toLowerCase()} type="hidden" />
				<button id="submit-button" type="submit">Post</button>
			</form>
		</div>
	);
}

export default PostForm;
