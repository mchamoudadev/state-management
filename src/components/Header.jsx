import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../AppContext";

export const Header = () => {
	const { state, dispatch } = useContext(GlobalContext);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}>
			<Link to="/">logo</Link>
			<ul
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: 10,
				}}>
				<Link to="/posts">Posts</Link>
				<Link to="/create-post">Create new Post</Link>
				{state.auth.isAuthenticated ? (
					<>
						Welcome{" "}
						<span style={{ color: "green" }}>
							{state.auth.currentUser.username}
						</span>
						<button
							onClick={() =>
								dispatch({
									type: "LOGOUT",
								})
							}>
							Logout
						</button>
					</>
				) : (
					<Link to="/login">Login</Link>
				)}
			</ul>
		</div>
	);
};
