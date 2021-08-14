import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import fb from "../firebase";

const Login = () => {
	let history = useHistory();

	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const validateUser = (e) => {
		e.preventDefault();

		const User = {
			email: user.email,
			password: user.password,
		};

		setUser({ User });

		// Validate if the user exist in the database

		fb.auth()
			.signInWithEmailAndPassword(User.email, User.password)
			.then((userCredential) => {
				history.push("/");
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.errorMessage;

				if (errorCode === "auth/wrong-password") {
					alert("Wrong password.");
				} else {
					alert(errorMessage);
				}
				console.log(error);
			});
	};

	return (
		<>
			<form className="card card-body" onSubmit={validateUser}>
				<h2 className="mb-3">Login</h2>
				<input
					type="text"
					placeholder="Email"
					className="col mb-3 form-control text-white border border-white"
					name="email"
					value={user.email || ""}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Password"
					className="col mb-3 form-control text-white border border-white"
					name="password"
					value={user.password || ""}
					onChange={(e) => setUser({ ...user, password: e.target.value })}
				/>
				<input
					type="submit"
					value="Sign in"
					className="col mb-3 form-control btn btn-outline-success"
				/>
			</form>
		</>
	);
};

export default Login;
