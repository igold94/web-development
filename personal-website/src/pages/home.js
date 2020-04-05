import React from "react";
import "../App.css";
import "./home.css";

class Home extends React.Component {
	render() {
		return (
			<main>
				<section className="no-scroll-content-area">
					<div className="column">
						<div className="billboard">
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
