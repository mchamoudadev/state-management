import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../AppContext";

const Login = () => {
	const { state, dispatch } = useContext(GlobalContext);
	const [username, setUsername] = useState("mc");
	const [password, setPassword] = useState("123");
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch({
			type: "LOGIN",
			payload: { username, password },
		});

		if (state.auth.authError) {
			console.log("incree");
			alert("username and password are invalid");
		} else {
			console.log("correct");
			navigate("/");
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="">Username</label>
					<input
						type="text"
						name="username"
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</div>
				<button type="submit">submit</button>
			</form>
			<Link to="/register">I don't have an account</Link>
		</div>
	);
};

export default Login;
