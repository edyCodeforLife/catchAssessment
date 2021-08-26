import ReactDOM from "react-dom";
import App from "./app";
import { Router } from 'react-router-dom';
import 'regenerator-runtime/runtime'
import { createBrowserHistory } from 'history';
import { StateProvider } from './data/states';
import { initialState } from './data/initial-states';
import { IAppState, appReducer } from "./data/reducers/app-reducer";
import './interceptor.ts'

const mainReducer = ({ application }: { application: IAppState }, action: any) => ({
	application: appReducer(application, action),
});

export const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<StateProvider initialState={initialState} reducer={mainReducer}>
			<App />
		</StateProvider>
	</Router>,
	document.getElementById("app")
);