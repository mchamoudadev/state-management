import { createContext, useReducer } from "react";
import globalReducer, { initialState } from "./appReducer";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(globalReducer, initialState);

	return (
		<GlobalContext.Provider value={{ state, dispatch, mc: "hamuuda" }}>
			{children}
		</GlobalContext.Provider>
	);
};
