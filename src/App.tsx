import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<h1>Home</h1>
				</Route>
				<Route exact path="/asd">
					<h1>Home asd</h1>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
