import { memo, useState, useEffect } from "react";
import { ScreenHomePage } from './screen';
import { cloneDeep, filter } from 'lodash';
import { useGlobalState } from '../data/states';
import { APP_ACTIONS } from '../data/reducers/app-reducer';
import { IProductServiceData, ProductServiceData } from '../data/business/index';

function _HomePage(props) {
	const _ProductService: IProductServiceData = new ProductServiceData();
	const [data, setData] = useState([]);
	const [_, dispatch] = useGlobalState();

	const getAllProduct = () => {
		_ProductService.GetProductList({
			Success: (res: any) => {
				setData(res.results);
				dispatch({
					type: APP_ACTIONS.CHANGE_LIST_PRODUCT,
					data: { listProduct: res.results }
				});

			}
		})
	}

	useEffect(() => {
		getAllProduct();
	}, [])

	return (
		<ScreenHomePage
			data={data}
			{...props}
		/>
	)
}
export const HomePage = memo((_HomePage));
