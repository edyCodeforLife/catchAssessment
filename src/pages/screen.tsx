import { memo } from "react";
import { HomeContent } from '../components/pages-component/home/index';

function _ScreenHomePage(props: any) {
	const { data } = props;

	return (
		<div className="loginContainer">
			<HomeContent
				data={data}
				{...props}
			/>
		</div>
	);
}

export const ScreenHomePage = memo(_ScreenHomePage);
