import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import { Route } from "react-router-dom";
import PrimaryNavbar from "./components/primary-navbar";

function App() {
	return (
		<div className="App">
			<PrimaryNavbar></PrimaryNavbar>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/blog" component={Blog} />
		</div>
	);
}

export default App;
