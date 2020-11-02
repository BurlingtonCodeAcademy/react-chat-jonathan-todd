import React, {useState} from "react";
import Main from "./MainRoom";
import PostForm from "./PostForm";
import Channel from "./Channel";
import "./App.css";
//import more room components like line 2 (perhaps just two more)
//install & import react-router-dom ???

function App() {

	const [channelSelected, setChannelSelected] = useState('hobbies')
	const [prevChannel, setPrevChannel] = useState('hobbies')
	console.log('In App, channel selected: ', channelSelected)
	return (
		<div className="App">
			<Main setChannelSelected={setChannelSelected} channelSelected={channelSelected} setPrevChannel={setPrevChannel} prevChannel={prevChannel}></Main>
		</div>
	);
}

export default App;
