import React, { useState, useEffect } from "react";
import ChannelEntry from './ChannelEntry'

function Channel() {

	// Set state
	const [channels, setChannels] = useState([]);

	// On page load, read channels from database
	useEffect(() => {
		if (channels.length === 0) {
			getChannels()
		}
	});

	// Fetch to get list of available channels from the database
	function getChannels() {
		let channelArray = [];
		fetch("/channels")
			.then((response) => response.json())
			.then((channelObject) => {
				channelObject.forEach((channel) => {
					channelArray.push(channel);
				});
				console.log(channelArray)
				setChannels(channelArray);
			});
	}

	// Render channels on page
	return (
		<div>
			{channels.length > 0 ? channels.map((indivChannel) => {
				return <ChannelEntry channelCollection={indivChannel}></ChannelEntry>;
			}) : null}
		</div>
	);
}

export default Channel;
