import "../styles/dashboard.css";
const Dashboard = () => {
	return (
		<div
			className="padding"
			style={{ height: window.innerHeight - 20, paddingTop: 120 }}
		>
			<div className="dashboard">
				<div className="servers">
					<div className="server">
						<img
							className="loading"
							src="https://cdn.discordapp.com/avatars/770212812785844264/e4fd30bfe01b65c3901d7636943b90d2.png?size=64"
							alt=""
						/>
					</div>
					<div className="server">
						<img
							className="loading"
							src="https://cdn.discordapp.com/avatars/770212812785844264/e4fd30bfe01b65c3901d7636943b90d2.png?size=64"
							alt=""
						/>
					</div>
					<div className="server">
						<img
							className="loading"
							src="https://cdn.discordapp.com/avatars/770212812785844264/e4fd30bfe01b65c3901d7636943b90d2.png?size=64"
							alt=""
						/>
					</div>
				</div>
				<div className="menu">
					<div className="profile">
						<img
							className="loading"
							src="https://cdn.discordapp.com/avatars/770212812785844264/e4fd30bfe01b65c3901d7636943b90d2.png?size=64"
							alt=""
						/>
						<h3>Regular pooria</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
