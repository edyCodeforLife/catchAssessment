import { IAppState } from './reducers/app-reducer';

export const initialState: {
	application: IAppState;

} = {
	application: {
		listProduct: [],
	}
};