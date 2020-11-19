import React, { useState } from "react";
import Channel from "./components/Channel";
import MainRoom from "./components/MainRoom"
import PostForm from "./components/PostForm" 	
import "./App.css";

function App() {

	// Setup state variables to track channel, default user to general channel when the app. starts
	const [channel, setChannel] = useState(null)

	let lastChannel = window.localStorage.getItem('channel')
	console.log('In App: ' + lastChannel)

	// Render the Main Panel.  Main panel contains the major components that make up the chat app
	return (
		<div id="message-pane">

			<div id="chat-window">
				<h1>Channel: {lastChannel===null ? 'general' : lastChannel}</h1>
				<MainRoom channel={channel}></MainRoom>
			</div>

			<div id="lower-pane">
				<div id="channel-buttons">
					<Channel setChannel={setChannel}></Channel>
				</div>

				<div id="form-wrapper">
					<PostForm channel={channel}></PostForm>
				</div>
			</div>
)
		</div>
	);
}

export default App;
