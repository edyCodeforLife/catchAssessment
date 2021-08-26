import { memo } from "react";
import { HomeContent } from '../components/pages-component/home/index';

function _ScreenHomePage(props: any) {
	const { data, metaData, labelName, handleClickSelected, handleclick, handleclose, datalist, anchorEl } = props;

	return (
		<div className="homeContainer">
			<HomeContent
				metaData={metaData}
				data={data}
				labelName={labelName}
				handleClickSelected={handleClickSelected}
				handleClick={handleclick}
				handleclose={handleclose}
				datalist={datalist}
				anchorEl={anchorEl}
				{...props}
			/>
		</div>
	);
}

export const ScreenHomePage = memo(_ScreenHomePage);
