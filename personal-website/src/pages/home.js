import React from "react";
import "./home.css";
import PrimaryNavbar from "../components/primary-navbar";
import Portrait from "../images/portrait.png";

class Home extends React.Component {
	render() {
		return (
			<main>
				<PrimaryNavbar activeLink="/"></PrimaryNavbar>
				<section className="no-scroll">
					<div className="column">
						<div className="no-scroll-box">
							<h1 className="premier-text">Ilan Gold</h1>
							<h2 className="sub-text">
								Something punchy that gets people jazzed about
								me...
							</h2>
						</div>
					</div>
					<div className="column">
						<div className="portrait" />
					</div>
				</section>
			</main>
		);
	}
}
export default Home;
