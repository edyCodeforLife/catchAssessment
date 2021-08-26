import { memo, useState, useEffect } from "react";
import { ScreenHomePage } from './screen';
import { cloneDeep, filter } from 'lodash';

function _HomePage(props) {


	return (
		<ScreenHomePage

			{...props}
		/>
	)
}
export const HomePage = memo((_HomePage));
