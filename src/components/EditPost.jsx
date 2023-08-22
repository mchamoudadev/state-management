import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApp from "../hooks/useApp";

const EditPost = () => {
	const { id } = useParams();
	const { state, dispatch } = useApp();
	const navigate = useNavigate();

	const post = state.posts.find((p) => p.id === parseInt(id));

	const [title, setTitle] = useState(post?.title || "");
	const [content, setContent] = useState(post?.content || "");

	const handleSubmit = (event) => {
		event.preventDefault();

		const updatedPost = {
			id: post.id,
			title,
			content,
			author: post.author,
		};

		dispatch({
			type: "EDIT_POST",
			payload: updatedPost,
		});
		navigate("/");
	};

	return (
		<div>
			<h1>Create new post</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="">Post title</label>
					<input
						onChange={(event) => setTitle(event.target.value)}
						value={title}
						type="text"
						name="title"
						placeholder="post title"
					/>
				</div>
				<div>
					<label htmlFor="">Post content</label>
					<textarea
						onChange={(event) => setContent(event.target.value)}
						value={content}
						name="content"
						id=""
						cols="30"
						rows="10"></textarea>
				</div>
				<button type="submit">update</button>
			</form>
		</div>
	);
};

export default EditPost;
