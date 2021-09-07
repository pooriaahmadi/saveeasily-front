import "../styles/home.css";
import logo from "../images/saveeasily.png";

const Home = () => {
	return (
		<div className="home">
			<div className="content-left">
				<div className="text">
					<h1>Save like a cool guy</h1>
					<p>
						With <b>Save Easily</b> you can save in the easiest way possible!
					</p>
					<p>
						Just right click on your message and <b>BOOM</b>
					</p>
					<p>
						Your message is saved and you can view it by just a command or in
						the dashboard!
					</p>
				</div>
				<div className="buttons">
					<button className="button">Invite Save easily</button>
					<button className="button">See features</button>
				</div>
			</div>
			<div className="content-right">
				<img src={logo} alt="" />
			</div>
		</div>
	);
};
export default Home;
