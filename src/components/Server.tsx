import { ServerInputs } from "../typings/interfaces";
import { useState } from "react";
import "../styles/server.scss";
const Server = (props: ServerInputs) => {
	const [active, setActive] = useState(false);
	return (
		<div className={`server ${active && "active"}`}>
			{props.icon ? (
				<img
					className="loading"
					src={`https://cdn.discordapp.com/icons/${props.id}/${props.icon}.png?size=64`}
					alt=""
				/>
			) : (
				<div style={{ backgroundColor: "#0c0e11a2" }}>
					{props.name.split(" ").length === 1
						? props.name
						: props.name
								.split(" ")
								.map((item: string) => item.substring(0, 1))
								.join("")}
				</div>
			)}
		</div>
	);
};
export default Server;
