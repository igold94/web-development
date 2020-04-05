import React from "react";
import "./primary-navbar.css";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

class PrimaryNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			avtiveLink: "/",
		};
	}
	createLinks(pages) {
		var links = [];
		for (var [name, path] of Object.entries(pages)) {
			links.push(
				<NavLink
					exact
					to={path}
					className="nav-link"
					activeClassName="active"
				>
					{name}
				</NavLink>
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
						activeKey={this.state.activeLink}
					>
						{this.createLinks({
							Home: "/",
							About: "/about",
							Blog: "/blog",
							Contact: "/contact",
						})}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default PrimaryNavbar;
