import { useContext } from "react";
import { GlobalContext } from "./AppContext";

import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
	// const state = useContext(GlobalContext);

	// console.log(state);

	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default App;
