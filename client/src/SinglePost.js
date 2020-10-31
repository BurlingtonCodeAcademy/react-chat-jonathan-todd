import React from "react";

function SinglePost(props) {
	return (
		<div>
			{props.postContent.parsedTime} {props.postContent.author} {props.postContent.message}
		</div>
	);
}
//stopped here @15:56 on Friday 30 Oct (trying to get a newly-created post splashed on the page)
export default SinglePost;

/*let parsedTime;
	if (props.postContent.when) {
		let timestamp = props.postContent.when;
		parsedTime = timestamp.split("T")[1].split(".")[0];
	}*/