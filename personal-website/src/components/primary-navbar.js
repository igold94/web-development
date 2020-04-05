import React from "react";
import "./primary-navbar.css";

import { Nav, Navbar } from "react-bootstrap";

class PrimaryNavbar extends React.Component {
	createLinks(pages) {
		var links = [];
		for (var [name, path] of Object.entries(pages)) {
			links.push(
				<Nav.Link href={path} key={path}>
					{name}
				</Nav.Link>
			);
		}
		return links;
	}
	render() {
		return (
			<Navbar variant="dark" expand="lg">
				<Navbar.Brand href="/" bsPrefix="navbar-brand">
					My Website
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav
						className="link-group"
						defaultActiveKey={this.props.activeLink}
					>
						{this.createLinks({
							Home: "/",
							About: "/about",
							Blog: "/blog",
							Contact: "/contact"
						})}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default PrimaryNavbar;
