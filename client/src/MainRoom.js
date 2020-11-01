import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
import Channel from "./Channel"

function Main() {
	const [post, setPost] = useState([]);
	useEffect(() => {
		if (post.length === 0) {
		//helper function to splash the recent messages in the chat window after 10 seconds
			setInterval(function () {
				getData();
			}, 10000)
			getData()
		}
	});

	//helper function for fetching recent messages and displaying them in the chat window
	function getData() {
		let postArray = [];
		fetch("/get")
			.then((response) => response.json())
			.then((postObject) => {
				postObject.forEach((post) => {
					postArray.push(post);
				});
				setPost(postArray);
			});
	}

	return (
		//chat window that shows in the browser (same style of window for each Channel)
		<div id="chat-window">
			<Channel></Channel>
			<p>{post.length > 0 ? post.map((indivPost) => {
				return <SinglePost postContent={indivPost}></SinglePost>;
			}) : null}
			</p>
		</div>
	);
}

export default Main;
