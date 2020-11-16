import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost";

function Main(props) {

	// Setup state variable to track user posts using an array
	const [post, setPost] = useState([])
	const [postChannel, setPostChannel] = useState(null)

	// Each time the page loads
	useEffect(() => {

		// Fetch post data for current channel if post array is empty or different channel is selected
		if (post.length === 0 ||
			props.channel !== postChannel)
		 	getData()

		// Set a timeout to read data every 10 seconds
		const timeout = window.setTimeout(function () {
			getData(props.channel);
		}, 10000)

		window.clearInterval(timeout);

	});

	function getData() {

		let postArray = [];

		// if channel is not stored in local storage yet, set to general as default otherwise use storage value
		let url = window.localStorage.getItem('channel') === null ? 'get/general' : '/get/' + window.localStorage.getItem('channel')
	
		fetch(url)
			.then((response) => response.json())
			.then((postObject) => {
				postObject.forEach((post) => {
					postArray.push(post);
				});
				setPost(postArray);
				setPostChannel(props.channel)
			});
	}

	// Render the page
	return (
		//chat window that shows in the browser (same style of window for each Channel)

		<div id="chat-window">
			<p>{post.length > 0 ? post.map((indivPost) => {
				return <SinglePost postContent={indivPost}></SinglePost>;
			}) : null}
			</p>
		</div>

	);
}

export default Main;
