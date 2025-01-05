export interface IGetProductByIdArgs {
  id: string;
}

// !! Product State
export interface IGetProductState {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: {
    _id: string;
    name: string;
    description: string;
  };
  stock: number;
  discount: number;
  rating: number;
  image: string;
  brand: string;
  sales: number;
  createdAt: string;
  updatedAt: string;
}

// !! Product By Id
export interface IGetProductByIdResponse {
  data: {
    product: IGetProductState;
  };
  error: any;
  message: string;
}

// !! Products
export interface IGetProductsResponse {
  data: {
    totalProducts: number;
    totalPages: number;
    currentPage: number;
    products: IGetProductState[];
    next: number | null;
    prev: number | null;
  };
  error: any;
  message: "محصولات با موفقیت دریافت شدند";
}
