import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost";

function Main() {
	const [post, setPost] = useState([]);
	useEffect(() => {
		if (post.length === 0) {
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
	});
	return (
		<div>
		<p>{post.length > 0 ? post.map((indivPost) => {
		return <SinglePost postContent={indivPost}></SinglePost>;
		}) : null}
		</p>
		</div>
	);
}

export default Main;
