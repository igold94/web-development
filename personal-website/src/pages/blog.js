import React from "react";
import "./blog.css";
import PrimaryNavbar from "../components/primary-navbar";

class Blog extends React.Component {
	render() {
		return <PrimaryNavbar activeLink="/blog"></PrimaryNavbar>;
	}
}
export default Blog;
