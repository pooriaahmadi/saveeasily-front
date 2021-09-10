import "../styles/menu.scss";
import { MenuInputs } from "../typings/interfaces";

const Menu = (props: MenuInputs) => {
	const convertDate = (dateString: string) => {
		const date = new Date(dateString);
		return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
	};
	return (
		<div className="menu">
			<div className="profile">
				<img className="loading" src={props.avatar} alt="" />
				<div>
					<h4>{props.username}</h4>
					<h5>#{props.discriminator}</h5>
				</div>
			</div>
			<div className="categories">
				<div className="category">
					<h4>Stats</h4>
					<div className="options">
						<div className="option">Used Commands: {props.usedCommands}</div>
						<div className="option">Database id: {props.databaseId}</div>
					</div>
				</div>
				{props.vip && (
					<div className="category">
						<h4>Vip</h4>
						<div className="options">
							<div className="option">
								Starts: {convertDate(props.vip.start)}
							</div>
							<div className="option">Ends: {convertDate(props.vip.end)}</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default Menu;
