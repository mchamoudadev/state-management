import React from "react";
import ProtectedAdmin from "../util/ProtectedAdmin";
import EditPost from "../components/EditPost";

const EditPostPage = () => {
	return (
		<ProtectedAdmin>
			<EditPost />
		</ProtectedAdmin>
	);
};

export default EditPostPage;
