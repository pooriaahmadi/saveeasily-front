import { UserDashboardInputs } from "../typings/interfaces";
import Saves from "./Saves";
import Menu from "./Menu";
const UserDashboard = (props: UserDashboardInputs) => {
	if (props.id !== props.userObject.discordId) {
		return <div className="dashboard-return">Access Denied</div>;
	}
	return (
		<>
			<Menu
				usedCommands={props.userObject.usedCommands}
				databaseId={props.userObject.id}
				vip={props.userObject.vip}
				avatar={props.userObject.avatar}
				discriminator={props.userObject.discriminator}
				username={props.userObject.username}
			></Menu>
			<Saves
				userGuilds={props.userGuilds}
				backend={props.backend}
				userObject={props.userObject}
			></Saves>
		</>
	);
};

export default UserDashboard;
