import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useApp from "../hooks/useApp";

const ProtectedAdmin = ({ children }) => {
	const { state, dispatch } = useApp();
	const navigate = useNavigate();
	// TODO: make it global
	useEffect(() => {
		if (!state.auth.isAuthenticated) {
			// alert("You are not authenticated");
			navigate("/login");
		}

		// ! = =
		if (state.auth.currentUser.role !== "admin") {
			// alert("You are not authenticated");
			navigate("/posts");
		}
	}, [state]);

	if (!state.auth.isAuthenticated) return <h1>Loading....</h1>;

	return <div>{children}</div>;
};

export default ProtectedAdmin;
