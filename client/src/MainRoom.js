import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
import Channel from "./Channel"



function Main() {
	const [post, setPost] = useState([]);
	const [channelSelected, setChannelSelected] = useState('hobbies')
	const [prevChannel, setPrevChannel] = useState('hobbies')
	let channel = 'hobbies'
	
	useEffect(() => {
		if (post.length === 0) {
		//helper function to splash the recent messages in the chat window after 10 seconds
			setTimeout(function () {
				getData(channelSelected);
			}, 10000)
			getData(channelSelected)
		}

		if (channelSelected !== prevChannel) {
			getData(channelSelected)
		}
	});

	//helper function for fetching recent messages and displaying them in the chat window
	async function getData() {
		let postArray = [];

		console.log('before fetch: ', channelSelected)
		let url = '/get/'+channelSelected.toLowerCase()
		console.log('url ', url)

		await fetch(url)
			.then((response) => response.json())
			.then((postObject) => {
				postObject.forEach((post) => {
					postArray.push(post);
				});
				console.log('Main channel selected: ' + channelSelected)
				setPost(postArray);
				setPrevChannel(channelSelected)
			});
	}

	return (
		//chat window that shows in the browser (same style of window for each Channel)
		<div id="chat-window">
			<Channel doMainClick={setChannelSelected}></Channel>
			<p>{post.length > 0 ? post.map((indivPost) => {
				return <SinglePost postContent={indivPost}></SinglePost>;
			}) : null}
			</p>
		</div>
	);
}

export default Main;
