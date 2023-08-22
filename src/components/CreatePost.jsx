import React, { useContext, useEffect, useState } from "react";

import { Navigate, useNavigate } from "react-router-dom";
import useApp from "../hooks/useApp";
import { GlobalContext } from "../AppContext";

const CreatePost = () => {
	const { state, dispatch } = useApp();
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	// TODO: make it global
	// useEffect(() => {
	// 	if (!state.auth.isAuthenticated) {
	// 		navigate("/login");
	// 	}
	// }, [state]);

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(Date.now());

		const newPost = {
			id: Date.now(),
			title,
			content,
			author: state.auth.currentUser.username,
		};

		dispatch({
			type: "ADD_POST",
			payload: newPost,
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
				<button type="submit">publish</button>
			</form>
		</div>
	);
};

export default CreatePost;
