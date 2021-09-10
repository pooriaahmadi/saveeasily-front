// Imports

import "./styles/app.scss";
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
const redirectUri =
	"https://discord.com/api/oauth2/authorize?client_id=879048523801317386&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard%2Freturn&response_type=code&scope=identify%20guilds%20guilds.join";

function App() {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [userState, setUserState] = useState(UserState.loggedIn);
	const [userObject, setUserObject] = useState({});
	const [userGuilds, setUserGuilds] = useState([]);
	const loginUser = async (result: { [key: string]: any }) => {
		const discordData = await fetch("https://discord.com/api/users/@me", {
			headers: {
				Authorization: `Bearer ${result.token}`,
			},
			method: "GET",
		});
		const discordResult = await discordData.json();
		setToken(result.token);
		setUserObject({
			...result,
			avatar: `https://cdn.discordapp.com/avatars/${result.discordId}/${discordResult.avatar}.png?size=256`,
		});
		localStorage.setItem("token", result.token);
		setUserState(UserState.loggedIn);
		await getUserGuilds();
	};
	const getUserGuilds = async () => {
		const response = await fetch(`https://discord.com/api/users/@me/guilds`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			method: "GET",
		});
		const result = await response.json();
		setUserGuilds(result);
	};
	useEffect(() => {
		const checkUserState = async () => {
			const response = await fetch(`${backend}/user/login`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				method: "POST",
			});
			if (response.status === 200) {
				const result = await response.json();
				await loginUser(result);
			} else {
				setUserState(UserState.guest);
			}
		};

		checkUserState();
	}, []);
	const redirectToLogin = () => {
		if (userState === UserState.guest) {
			window.location.href = redirectUri;
		}
	};
	return (
		<Router>
			<Header
				redirectUri={redirectUri}
				userObject={userObject}
				userState={userState}
			></Header>
			<Switch>
				<Route exact path="/dashboard/return">
					<DashboardReturn
						backend={backend}
						loginUser={loginUser}
					></DashboardReturn>
				</Route>
				<Route path="/dashboard/:mode/:id">
					<Dashboard
						userGuilds={userGuilds}
						token={token}
						redirectToLogin={redirectToLogin}
						backend={backend}
						userObject={userObject}
					></Dashboard>
				</Route>
				<Route exact path="/">
					<Home></Home>
					<Footer></Footer>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
