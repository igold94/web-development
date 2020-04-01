import React from "react";
import Home from "./Home";
import Layout from "./layout/Layout";
import { Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={Home} />
			<Route exact path="/Layout" component={Layout} />
		</div>
	);
}

export default App;
