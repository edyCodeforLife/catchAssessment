

export const APP_ACTIONS = {
	CHANGE_LIST_PRODUCT: 'CHANGE_LIST_PRODUCT',
};

export interface IAppState {
	listProduct?: any[];
}

export interface IAppAction {
	type: 'CHANGE_LIST_PRODUCT';
	data: IAppState;
}

export const appReducer = (state: IAppState, action: IAppAction): IAppState => {
	switch (action.type) {
		case APP_ACTIONS.CHANGE_LIST_PRODUCT:
			return {
				...state,
				listProduct: action.data.listProduct
			};
		default:
			return state;
	}
};
