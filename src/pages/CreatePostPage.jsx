import React from "react";
import CreatePost from "../components/CreatePost";
import Protected from "../util/Protected";
import ProtectedAdmin from "../util/ProtectedAdmin";

const CreatePostPage = () => {
	return (
		<ProtectedAdmin>
			<CreatePost />
		</ProtectedAdmin>
	);
};

export default CreatePostPage;
