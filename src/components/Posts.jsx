import React from "react";
import useApp from "../hooks/useApp";
import { useNavigate } from "react-router-dom";

const Posts = () => {
	const { state, dispatch } = useApp();
	const navigate = useNavigate();
	console.log(state);

	return (
		<div>
			{state.posts.map((post) => (
				<div key={post.id}>
					<h1>{post.title}</h1>
					<p>{post.content}</p>
					<p style={{ color: "green" }}>created by : {post.author}</p>

					{state.auth.currentUser &&
						post.author === state.auth.currentUser.username && (
							<div>
								<button
									onClick={() =>
										dispatch({
											type: "DELETE_POST",
											payload: post.id,
										})
									}>
									delete
								</button>
								<button onClick={() => navigate(`/edit-post/${post.id}`)}>
									update
								</button>
							</div>
						)}
				</div>
			))}
		</div>
	);
};

export default Posts;
