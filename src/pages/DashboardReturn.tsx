import { useEffect, useState } from "react";
import { DashboardReturnInterface } from "../typings/interfaces";
import { Redirect } from "react-router-dom";
import "../styles/dashboard-return.scss";

const DashboardReturn = (props: DashboardReturnInterface) => {
	const code = new URLSearchParams(window.location.search).get("code");
	const [todo, setTodo] = useState(<h1>Loading...</h1>);
	useEffect(() => {
		const discordReturn = async () => {
			const response = await fetch(
				`${props.backend}/discord/return?code=${code}`
			);
			const result = await response.json();

			if (response.status === 200) {
				await props.loginUser(result);
				setTodo(
					<Redirect to={`/dashboard/user/${result.discordId}`}></Redirect>
				);
			} else {
				setTodo(<h1>{result.message}</h1>);
			}
		};
		discordReturn();
	}, []);

	return <div className="dashboard-return">{todo}</div>;
};
export default DashboardReturn;
