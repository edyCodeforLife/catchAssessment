export interface IProductResponse {
	metadata: IMetadata;
	results: IResults[];
}

export interface IMetadata {
	query: string;
	total: number;
	page: number;
	pages: number;
}

export interface IResults {
	id: string;
	name: string;
	salePrice: number;
	retailPrice: number;
	imageUrl: string;
	quantityAvailable: number;
}