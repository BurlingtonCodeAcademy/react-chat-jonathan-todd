import React from "react";

function ChannelEntry(props) {

 function setChannel(channelName) {

		// Save selected channel in state
		props.setChannel(channelName.toLowerCase())

		// save selected channel in local storage
		window.localStorage.setItem('channel', channelName);
	}
      
    return (
		<button id="channel-link" name={props.channelCollection.channelName} onClick={(evt)=> setChannel(evt.target.name)}>
			{props.channelCollection.channelName}
		</button>
	);
}

export default ChannelEntry