// Imports

import "./styles/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<Header></Header>
			<Switch>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Footer></Footer>
			</Switch>
		</Router>
	);
}

export default App;
