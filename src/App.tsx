// Imports

import "./styles/app.css";
import { useState, useEffect } from "react";
import { UserState } from "./typings/enums";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardReturn from "./pages/DashboardReturn";

const backend = "http://localhost:4000";

function App() {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [userState, setUserState] = useState(UserState.guest);
	const [userObject, setUserObject] = useState({});
	useEffect(() => {
		const checkUserState = async () => {
			const response = await fetch(`${backend}/user/check`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				method: "POST",
			});
			if (response.status === 200) {
				setUserState(UserState.loggedIn);
			}
		};
		checkUserState();
	}, []);
	return (
		<Router>
			<Header userState={userState}></Header>
			<Switch>
				<Route path="/dashboard/return">
					<DashboardReturn
						backend={backend}
						setUserState={setUserState}
						setUserObject={setUserObject}
					></DashboardReturn>
				</Route>
				<Route path="/dashboard">
					<Dashboard></Dashboard>
				</Route>
				<Route path="/">
					<Home></Home>
					<Footer></Footer>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
