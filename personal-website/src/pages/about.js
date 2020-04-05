import React from "react";
import "./about.css";
import PrimaryNavbar from "../components/primary-navbar";

class About extends React.Component {
	render() {
		return <PrimaryNavbar activeLink="/about"></PrimaryNavbar>;
	}
}
export default About;
