import { memo } from "react";
import { IDataList } from ".";
import { HomeContent } from '../components/pages-component/home/index';
import { IResults, IMetadata } from '../data/services/product/IProduct';

export interface IHomePageProps {
	data: IResults[];
	metaData: IMetadata;
	labelName: string;
	handleclickselected(item: IDataList): void;
	handleclick(event: React.MouseEvent<HTMLElement>): void;
	handleclose(): void;
	datalist: IDataList[];
	anchorEl: null | HTMLElement;
}

function _ScreenHomePage(props: any) {
	const {
		data,
		metaData,
		labelName,
		handleclickselected,
		handleclick,
		handleclose,
		datalist,
		anchorEl
	} = props;

	return (
		<div className="homeContainer">
			<HomeContent
				metaData={metaData}
				data={data}
				labelName={labelName}
				handleclickselected={handleclickselected}
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
