import "../styles/dashboard.scss";
import Servers from "../components/Servers";
import UserDashboard from "../components/UserDashboard";
import { DashboardInputs } from "../typings/interfaces";
import { useParams } from "react-router";
import ServerDashboard from "../components/ServerDashboard";
import { useState } from "react";
const Dashboard = (props: DashboardInputs) => {
	props.redirectToLogin();
	const params = useParams<{
		mode: string;
		id: string;
	}>();
	return (
		<div
			className="padding"
			style={{ height: window.innerHeight - 20, paddingTop: 120 }}
		>
			<div className="dashboard">
				<Servers
					userGuilds={props.userGuilds}
					token={props.token}
					backend={props.backend}
					userObject={props.userObject}
				></Servers>
				{params.mode === "user" ? (
					<UserDashboard {...props} id={params.id}></UserDashboard>
				) : (
					<ServerDashboard {...props} id={params.id}></ServerDashboard>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
