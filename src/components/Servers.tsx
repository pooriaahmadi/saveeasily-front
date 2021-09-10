import Server from "./Server";
import { useState, useEffect } from "react";
import { ServersInputs, ServerInputs } from "../typings/interfaces";
import ServerPreview from "./ServerPreview";
import "../styles/servers.scss";

const Servers = (props: ServersInputs) => {
	const [guilds, setGuilds] = useState([]);
	useEffect(() => {
		const getGuilds = async () => {
			const response = await fetch(`${props.backend}/user/guilds`, {
				headers: {
					Authorization: `Bearer ${props.token}`,
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({ guilds: props.userGuilds }),
			});
			const result = await response.json();
			setGuilds(result);
		};
		getGuilds();
	}, [props.userGuilds]);
	return (
		<div className="servers">
			<div className="server active">
				<img src={props.userObject.avatar} alt="" />
			</div>
			{guilds.length
				? guilds.map((item: ServerInputs) => (
						<Server {...item} key={item.id}></Server>
				  ))
				: Array(4)
						.fill(1)
						.map((el, i) => <ServerPreview key={i} />)}
		</div>
	);
};
export default Servers;
