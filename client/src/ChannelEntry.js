import React from "react";

function ChannelEntry(props) {
	return (
		<li>
			{props.channelCollection.channelName}
		</li>
	);
}

export default ChannelEntry