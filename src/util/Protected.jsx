import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useApp from "../hooks/useApp";

const Protected = ({ children }) => {
	const { state, dispatch } = useApp();
	const navigate = useNavigate();
	// TODO: make it global
	useEffect(() => {
		if (!state.auth.isAuthenticated) {
			// alert("You are not authenticated");
			navigate("/login");
		}
	}, [state]);

	return <div>{children}</div>;
};

export default Protected;
