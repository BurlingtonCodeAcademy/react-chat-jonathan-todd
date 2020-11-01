import React from "react";

function ChannelEntry(props) {
    
    function doSomething() {
        alert('click happened')
    }
    
    
    return (
		<button name="channel" onClick={doSomething}>
			{props.channelCollection.channelName}
		</button>
	);
}

export default ChannelEntry