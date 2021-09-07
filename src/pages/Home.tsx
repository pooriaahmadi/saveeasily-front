import "../styles/home.css";
import logo from "../images/saveeasily.png";
import { Link } from "react-router-dom";
import { Element, scroller } from "react-scroll";
const Home = () => {
	return (
		<>
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
						<button
							className="button"
							onClick={() => {
								scroller.scrollTo("features", {
									duration: 500,
								});
							}}
						>
							See features
						</button>
					</div>
				</div>
				<div className="content-right">
					<img src={logo} alt="" />
				</div>
			</div>
			<Element className="features" id="features" name="features">
				<div className="description">
					<h1>Features</h1>
					<p>
						Here are just a few of dozens features contained in{" "}
						<b>Save easily</b>
					</p>
				</div>
				<div className="feature-items">
					<div className="feature">
						<h3>Accessibility</h3>
						<p>You can access the bot from anywhere! Even in dashboard.</p>
					</div>
					<div className="feature">
						<h3>Support</h3>
						<p>24/7 Support even for discord.js!</p>
					</div>
					<div className="feature">
						<h3>Media</h3>
						<p>
							You can easily save your video, image, gif with just one click.
						</p>
					</div>
					<div className="feature">
						<h3>Uptime</h3>
						<p>
							Bot is 24/7 online on private server for serving your saves {"<3"}
							.
						</p>
					</div>
				</div>
			</Element>
		</>
	);
};
export default Home;
