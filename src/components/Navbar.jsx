import React from "react";
import { Link } from "react-router-dom";
import SignOut from "./SignOut";

const Navbar = () => {
	return (
		<div>
			<Link to="/" className="btn btn-outline-primary me-2">
				Publish
			</Link>
			<Link to="/sign-up" className="btn btn-outline-success me-2">
				Sign up
			</Link>
			<Link to="/sign-in" className="btn btn-outline-light me-2">
				Sign in
			</Link>
			<button onClick={SignOut} className="btn btn-outline-danger me-2">
				Sign out
			</button>
		</div>
	);
};

export default Navbar;
