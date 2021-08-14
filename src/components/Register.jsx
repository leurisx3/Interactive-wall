import React, { useState } from "react";
// eslint-disable-next-line
import fb from "../firebase";

const Register = () => {
	const [user, setUser] = useState({
		name: "",
		lastname: "",
		username: "",
		password: "",
		email: "",
	});

	const addUser = (e) => {
		e.preventDefault();

		const Users = {
			name: user.name,
			lastname: user.lastname,
			username: user.username,
			password: user.password,
			email: user.email,
		};

		setUser({ Users });

		fb.auth()
			.createUserWithEmailAndPassword(Users.email, Users.password)
			.then((userCredential) => {
				// sign in
				// eslint-disable-next-line
				var userLogged = userCredential.user;
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;

				if (errorCode === "auth/weak-password") {
					alert("The password is too weak.");
				} else {
					alert(errorMessage);
				}
				console.log(error);
			});

		setUser({
			name: "",
			lastname: "",
			username: "",
			password: "",
			email: "",
		});
	};

	return (
		<div className="container p-4">
			<div className="row">
				<form className="card card-body" onSubmit={addUser}>
					<h2 className="mb-3">Sign up</h2>
					<input
						type="text"
						placeholder="Name"
						className="col mb-3 form-control text-white border border-white"
						name="name"
						value={user.name}
						onChange={(e) => setUser({ ...user, name: e.target.value })}
					/>
					<input
						type="text"
						placeholder="Last name"
						className="col mb-3 form-control text-white border border-white"
						name="lastname"
						value={user.lastname}
						onChange={(e) => setUser({ ...user, lastname: e.target.value })}
					/>
					<input
						type="text"
						placeholder="Username"
						className="col mb-3 form-control text-white border border-white"
						name="username"
						value={user.username}
						onChange={(e) => setUser({ ...user, username: e.target.value })}
					/>
					<input
						type="password"
						placeholder="Password"
						className="col mb-3 form-control text-white border border-white"
						name="password"
						value={user.password}
						onChange={(e) => setUser({ ...user, password: e.target.value })}
					/>
					<input
						type="text"
						placeholder="Email"
						className="col mb-3 form-control text-white border border-white"
						name="Email"
						value={user.email}
						onChange={(e) => setUser({ ...user, email: e.target.value })}
					/>
					<input
						type="submit"
						value="Sign up"
						className="col form-control btn btn-outline-success"
					/>
				</form>
			</div>
		</div>
	);
};

export default Register;
