import React from "react";

function PostForm(props) {

	console.log('in post form channel selected: ', props.channelSelected)
	return (
		//the general form for making a chat post
		<form id="form" action={"/create/"+props.channelSelected} method="POST">
			<input id="author" name="author" type="text" placeholder="Your name" />
			<input id="message" name="message" type="text" placeholder="Type your post here" />
			<input id="channel" name="channel" value={props.channelSelected.toLowerCase()} type="hidden"/>
			<button id="submit-button" onClick={props.render} type="submit">Post</button>
		</form>
	);
}

export default PostForm;
