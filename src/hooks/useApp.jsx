import { useContext } from "react";
import { GlobalContext } from "../AppContext";

const useApp = () => {
	const context = useContext(GlobalContext);

	if (context === undefined) {
		throw new Error("context must be defined in AppContext");
	}

	return context;
};

export default useApp;
