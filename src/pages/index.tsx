import React, { memo, useState, useEffect, useRef } from "react";
import { ScreenHomePage } from './screen';
import { clone } from 'lodash';
import { useGlobalState } from '../data/states';
import { ModAlert } from '../components/alert/index';
import { APP_ACTIONS } from '../data/reducers/app-reducer';
import { IProductServiceData, ProductServiceData } from '../data/business/index';

export interface IDataList {
	label: string;
	sortQuery: string;
}

function _HomePage(props) {
	const _ProductService: IProductServiceData = new ProductServiceData();
	const [data, setData] = useState([]);
	const [metaData, setMetadata] = useState({});
	const userInteraction = useRef(false);
	const [sortQuery, setSortQuery] = useState<string>("");
	const [_, dispatch] = useGlobalState();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [labelName, setLabelName] = useState<string>("SortBy")

	const datalist: IDataList[] = [
		{
			label: "Highest Price",
			sortQuery: "highest"
		},
		{
			label: "Lowest Price",
			sortQuery: "lowest"
		}
	];

	const handleclick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleclose = () => {
		setAnchorEl(null);
	};

	const getAllProduct = () => {
		_ProductService.GetProductList({
			Success: (res: any) => {
				setMetadata(res.metadata);
				setData(res.results);
				dispatch({
					type: APP_ACTIONS.CHANGE_LIST_PRODUCT,
					data: { listProduct: res.results }
				});

			},
			NotFound: (res: any) => {
				ModAlert.show({
					title: "Info",
					subtitle: "Data tidak ditemukan",
					type: 'info',
				});
			},
			ValidationError: (res: any) => {
				ModAlert.show({
					title: "Error",
					subtitle: "Maaf, sedang terjadi kesalahan",
					type: 'warning',
				});
			},
			ServerError: (res: any) => {
				ModAlert.show({
					title: "Error",
					subtitle: "Terjadi Kesalahan pada server!",
					type: 'warning',
				});
			}
		})
	}

	const handleclickselected = (item: IDataList) => {
		userInteraction.current = true;
		setLabelName(item.label);
		setSortQuery(item.sortQuery)
	}

	const sortingData = () => {
		let cloneData = clone(data);
		if (sortQuery === "highest") {
			cloneData = cloneData.sort((a, b) => (b.salePrice) - (a.salePrice));
		}

		if (sortQuery === "lowest") {
			cloneData = cloneData.sort((a, b) => (a.salePrice) - (b.salePrice));
		}
		setData(cloneData)
	}

	useEffect(() => {
		userInteraction.current && sortingData();
	}, [sortQuery])

	useEffect(() => {
		getAllProduct();
	}, [])

	return (
		<ScreenHomePage
			metaData={metaData}
			data={data}
			labelName={labelName}
			handleclickselected={handleclickselected}
			handleclick={handleclick}
			handleclose={handleclose}
			datalist={datalist}
			anchorEl={anchorEl}
			{...props}
		/>
	)
}
export const HomePage = memo((_HomePage));
