import React, { useState } from "react";
import fb from "../firebase";

const Login = () => {
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
				// eslint-disable-next-line
				var user = userCredential.user;

				fb.auth().onAuthStateChanged((userLogged) => {
					if (userLogged) {
						var uid = user.uid;
						console.log(`The user: ${userLogged.email} is logged.`);
					}
				});
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
			<form className="from-group" onSubmit={validateUser}>
				<h2 className="mb-3">Login</h2>
				<input
					type="text"
					placeholder="Email"
					className="col mb-3 form-control"
					name="email"
					value={user.email || ""}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Password"
					className="col mb-3 form-control"
					name="password"
					value={user.password || ""}
					onChange={(e) => setUser({ ...user, password: e.target.value })}
				/>
				<input
					type="submit"
					value="Login"
					className="col mb-3 form-control btn btn-outline-success"
				/>
			</form>
		</>
	);
};

export default Login;
