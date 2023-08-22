import React, { useCallback, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../AppContext";

const Register = () => {
	const { state, dispatch } = useContext(GlobalContext);
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		const newUserData = {
			id: Date.now(),
			username: userName,
			password: password,
		};
		dispatch({
			type: "REGISTER_USER",
			payload: newUserData,
		});
		navigate("/login");
	};

	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="">Username</label>
					<input
						type="text"
						name="username"
						value={userName}
						onChange={(event) => setUserName(event.target.value)}
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
			<Link to="/login">I have an account</Link>
		</div>
	);
};

export default Register;
