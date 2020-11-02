import React from "react";

function ChannelEntry(props) {

 function setChannel(channelName) {
		console.log('in channel entry ', channelName)
		props.setChannelState(channelName.toLowerCase())
	}
      
    return (
		<button name={props.channelCollection.channelName} onClick={(evt)=> setChannel(evt.target.name)}>
			{props.channelCollection.channelName}
		</button>
	);
}

export default ChannelEntry