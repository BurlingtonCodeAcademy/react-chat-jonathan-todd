import React, { useState, useEffect } from "react";

//const [] = useEffect()

function Main() {
	const [post, setPost] = useState([]);
	useEffect(() => {
		//let post = false;
		if (post.length===0) {
            let postArray = []
			fetch("http://localhost:8000/get")
				.then((response) => response.json())
				.then((postObject) => {
					console.log(postObject);
					postObject.forEach(post => {
                        postArray.push(post)
                    });
                    setPost(postArray)
                });
                
		}
    });
    console.log(post)
	return (
		<div>
			<p>{post.length>0 ? post[0].body: null}</p>
		</div>
	);
}

export default Main;
