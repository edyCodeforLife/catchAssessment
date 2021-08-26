import { AxiosPromise } from 'axios';
import { DataService } from '../config';
import { IProductResponse } from './IProduct';

export interface IProductService {
	GetProductList(): AxiosPromise<IProductResponse>;
}

export class ProductService implements IProductService {

	GetProductList(): AxiosPromise<IProductResponse> {
		return DataService.get<IProductResponse>('/product-list');
	}

}