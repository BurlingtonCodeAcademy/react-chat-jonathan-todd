import React, { useState, useEffect } from "react";

function PostForm(props) {

	// Render the form to allow user to post a chat entry
	return (
		//the general form for making a chat post
		<div id="form-wrapper">
			<form id="form" action={"/create/" + props.channelSelected} method="POST">
				<input id="author" name="author" type="text" placeholder="Your name" />
				<input id="message" name="message" type="text" placeholder="Type your post here" />
				<input id="channel" name="channel" value={props.channel === null ? 'general' : props.channel.toLowerCase()} type="hidden" />
				<button id="submit-button" type="submit">Post</button>
			</form>
		</div>
	);
}

export default PostForm;
