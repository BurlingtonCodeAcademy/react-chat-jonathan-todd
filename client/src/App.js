<<<<<<< HEAD
import React from "react";
import Main from "./components/MainRoom";
import PostForm from "./components/PostForm";
import Channel from "./components/Channel";
import "./App.css";

=======
import React, {useState} from "react";
import Main from "./MainRoom";
import "./App.css";
>>>>>>> 6e48fc66e9dddfbbc3c0c26cf2579aea4ffaa0ba

function App() {

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
