import { createContext, useContext, useReducer } from 'react';
import { IAppState, IAppAction } from './reducers/app-reducer';

interface IInitialState {
	application: IAppState;
}

export const StateContext = createContext({});
export const StateProvider = (
	{ reducer, initialState, children }:
		{ reducer: any, initialState: IInitialState, children?: any }
) => (
	<StateContext.Provider value={useReducer(reducer, initialState)} >
		{ children}
	</StateContext.Provider>
);

export const useGlobalState = (): any => useContext(StateContext);