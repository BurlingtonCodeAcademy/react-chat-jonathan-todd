import React, {useState } from "react";
import Main from "./components/MainRoom";
import "./App.css";

function App() {

	// A cookie is being used to preserve the channel a user is in 
//	let channel = document.cookie.split('; ').find(row => row.startsWith('channel')).split('=')[1];

	// Setup state variables to track channel, default user to general channel when the app. starts
	const [channelSelected, setChannelSelected] = useState('general')
	const [prevChannel, setPrevChannel] = useState('general')
	
	// Render the Main Panel.  Main panel contains the major components that make up the chat app
	return (
		<div className="App">
			<Main setChannelSelected={setChannelSelected} channelSelected={channelSelected} setPrevChannel={setPrevChannel} prevChannel={prevChannel}></Main>
		</div>
	);
}

export default App;
