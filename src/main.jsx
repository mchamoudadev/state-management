import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalProvider } from "./AppContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import NewPostPage from "./pages/CreatePostPage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import EditPost from "./pages/EditPostPage.jsx";
import EditPostPage from "./pages/EditPostPage.jsx";

const routerProvider = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <PostsPage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/register",
				element: <RegisterPage />,
			},
			{
				path: "/create-post",
				element: <NewPostPage />,
			},
			{
				path: "/posts",
				element: <PostsPage />,
			},
			{
				path: "/edit-post/:id",
				element: <EditPostPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalProvider>
			<RouterProvider router={routerProvider} />
		</GlobalProvider>
	</React.StrictMode>
);
