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
			setInterval(function () {
				getData(channelSelected);
			}, 10000)
			getData(channelSelected)
		}

		if (channelSelected != prevChannel) {
			getData(channelSelected)
		}
	});

	async function getData(channelName) {
		let postArray = [];

		console.log('before fetch: ' + channelName)
		let url = '/get/'+channelName.toLowerCase()
		console.log('url ', url)

		await fetch(url)
			.then((response) => response.json())
			.then((postObject) => {
				postObject.forEach((post) => {
					postArray.push(post);
				});
				setPost(postArray);
				setPrevChannel(channelName)
			});
	}

	return (
		<div>
			<Channel doMainClick = {setChannelSelected}></Channel>
	
			<p>{post.length > 0 ? post.map((indivPost) => {
				return <SinglePost postContent={indivPost}></SinglePost>;
			}) : null}
			</p>
		</div>
	);
}

export default Main;
