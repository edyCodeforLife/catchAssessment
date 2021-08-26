import { uniqueId } from 'lodash';
import { createElement } from 'react';
import ReactDOM from 'react-dom';

import { ICustomAlertShow, CustomAlert } from './custom-alert';

interface IAlert {
	show: (params: ICustomAlertShow) => void;
}

export const ModAlert: IAlert = {
	show: (params: ICustomAlertShow) => {
		const getElement: any = () => {
			return createElement(CustomAlert, { ...params, key: uniqueId() });
		};

		ReactDOM.render(getElement(), document.getElementById('alerts'));

	}
};
