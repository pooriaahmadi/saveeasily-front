import { useEffect } from "react";
import { DashboardReturnInterface } from "../typings/interfaces";

const DashboardReturn = (props: DashboardReturnInterface) => {
	const code = new URLSearchParams(window.location.search).get("code");
	useEffect(() => {
		const discordReturn = async () => {
			const response = await fetch(
				`${props.backend}/discord/return?code=${code}`
			);
			const result = await response.json();
			props.setUserObject(result);
		};
		discordReturn();
	}, []);
};
export default DashboardReturn;
