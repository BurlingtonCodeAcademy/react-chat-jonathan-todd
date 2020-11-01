import React from "react";

function ChannelEntry(props) {

	async function setChannel(channelName) {
		console.log('in channel entry ', channelName.target.name)
		await props.setChannelState(channelName.target.name)
	}
      
    return (
		<button name={props.channelCollection.channelName} onClick={setChannel}>
			{props.channelCollection.channelName}
		</button>
	);
}

export default ChannelEntry