import React from "react";
import Posts from "../components/Posts";
import Protected from "../util/Protected";

const PostsPage = () => {
	return (
		<Protected>
			<Posts />
		</Protected>
	);
};

export default PostsPage;
