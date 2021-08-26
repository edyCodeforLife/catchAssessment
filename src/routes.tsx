import { Switch, Route } from "react-router-dom";
import { HomePage } from './pages/index';

const Main = (props) => {
	return (
		<Switch>
			<Route path="/" component={HomePage} />
		</Switch>

	)
}

export default Main;