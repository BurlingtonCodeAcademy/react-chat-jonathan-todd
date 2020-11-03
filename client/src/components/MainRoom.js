import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
import Channel from "./Channel"
import PostForm from "./PostForm"

function Main(props) {

	// Setup state variable to track user posts using an array
	const [post, setPost] = useState([]);

	// Each time the page loads
	useEffect(() => {

		// A cookie is being used to preserve the channel a user is in 
		let channel = document.cookie.split('; ').find(row => row.startsWith('channel')).split('=')[1];
		let prevChannel = document.cookie.split('; ').find(row => row.startsWith('channel')).split('=')[1];

		// Fetch post data for current channel if post array is empty
		if (post.length === 0) {
			getData(channel)
		}

		// Set a timeout to read data every 10 seconds
		const timeout = window.setTimeout(function () {
			getData(channel);
		}, 10000)

		if (props.channelSelected !== props.prevChannel) {
			getData(channel)
			prevChannel = channel
		}
		
		window.clearInterval(timeout);
		
	});

	//helper function for fetching recent messages 
	async function getData(channel) {
		let postArray = [];
		let url = '/get/' + channel.toLowerCase()

		await fetch(url)
			.then((response) => response.json())
			.then((postObject) => {
				postObject.forEach((post) => {
					postArray.push(post);
				});
				setPost(postArray);
				props.setPrevChannel(channel)
			});
	}

	// Render the page
	return (
		//chat window that shows in the browser (same style of window for each Channel)
		<div id="message-pane">
			<h1 id="channel-title">Channel: {props.channelSelected.toUpperCase()}</h1>
			<div id="chat-window">

				<p>{post.length > 0 ? post.map((indivPost) => {
					return <SinglePost postContent={indivPost}></SinglePost>;
				}) : null}
				</p>
			</div>

			<div id="lower-pane">
				<div id="channel-buttons">
					<Channel doMainClick={props.setChannelSelected}></Channel>
				</div>

				<div id="form-wrapper">
					<PostForm channelSelected={props.channelSelected}></PostForm>
				</div>
			</div>
		</div>

	);
}

export default Main;
