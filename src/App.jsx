import React from "react";
import "./App.css";
import Publication from "./components/Publication";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="container p-4">
			<div className="row">
				<Navbar />
				<Switch>
					<Route path="/" component={Publication} exact />
					<Route path="/sign-up" component={Register} />
					<Route path="/sign-in" component={Login} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
