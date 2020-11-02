import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
import Channel from "./Channel"
import PostForm from "./PostForm"

function Main(props) {
	const [post, setPost] = useState([]);
	const [render, setRender] = useState(1)

	console.log('At top of Main', props.channelSelected)
	console.log('At top of Main prev channel', props.channelSelected)
	
	useEffect(() => {
		if (post.length === 0) {
		//helper function to splash the recent messages in the chat window after 10 seconds
			setTimeout(function () {
				getData(props.channelSelected);
			}, 10000)
			getData(props.channelSelected)
		}

		if (props.channelSelected !== props.prevChannel) {
			getData(props.channelSelected)
		}
	});

	//helper function for fetching recent messages and displaying them in the chat window
	async function getData() {
		let postArray = [];

		console.log('before fetch: ', props.channelSelected)
		let url = '/get/'+props.channelSelected.toLowerCase()
		console.log('url ', url)

		await fetch(url)
			.then((response) => response.json())
			.then((postObject) => {
				postObject.forEach((post) => {
					postArray.push(post);
				});
				console.log('Main channel selected: ' + props.channelSelected)
				console.log('Fetch Array is ', postArray)
				setPost(postArray);
				props.setPrevChannel(props.channelSelected)
			});
	}

	function renderHandler() {
		setRender(2)
	}

	return (
		//chat window that shows in the browser (same style of window for each Channel)
		<div id="chat-window">
			<Channel doMainClick={props.setChannelSelected}></Channel>
			<p>{post.length > 0 ? post.map((indivPost) => {
				return <SinglePost postContent={indivPost}></SinglePost>;
			}) : null}
			</p>
			<PostForm channelSelected={props.channelSelected} render={renderHandler}></PostForm>
		</div>
	);
}

export default Main;
