import React from "react";

function ChannelEntry(props) {

 function setChannel(channelName) {
		props.setChannelState(channelName.toLowerCase())
		document.cookie = "channelName="+channelName.toLowerCase(); 
	}
      
    return (
		<button id="channel-link" name={props.channelCollection.channelName} onClick={(evt)=> setChannel(evt.target.name)}>
			{props.channelCollection.channelName}
		</button>
	);
}

export default ChannelEntry