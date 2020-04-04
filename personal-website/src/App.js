import React from "react";
import Home from "./pages/home";
import { Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={Home} />
		</div>
	);
}

export default App;
