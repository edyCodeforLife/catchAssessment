
import { IResponseSuccess, HandleError } from '../../services/error/index';
import { IProductService, ProductService } from '../../services/product/Product';

export interface IProductServiceData {
	GetProductList(handler: IResponseSuccess): void;
}

export class ProductServiceData implements IProductServiceData {
	private _service: IProductService;

	constructor() {
		this._service = new ProductService();
	}

	async GetProductList(handler: IResponseSuccess) {
		try {
			const response = await this._service.GetProductList();
			return await handler.Success<any>(response.data);
		}
		catch (e) {
			return HandleError(e, handler);
		}
	}
}