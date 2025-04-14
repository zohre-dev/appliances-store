import { IBrandState } from "../brands/index.types";
import { ICategoriesState } from "../categories/index.types";

export interface IGetProductByIdArgs {
  id: string;
}

// !! Product State
export interface IProductState {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: ICategoriesState;
  stock: number;
  discount: number;
  rating: number;
  image: string;
  brand: IBrandState;
  sales: number;
  createdAt: string;
  updatedAt: string;
  technicalSpecifications: ITechnicalSpecificationsState[];
}

// !! Product By Id
export interface IGetProductByIdResponse {
  data: {
    product: IProductState;
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
    products: IProductState[];
    next: number | null;
    prev: number | null;
  };
  error: any;
  message: "محصولات با موفقیت دریافت شدند";
}

export interface ITechnicalSpecificationsState {
  key: string;
  value: string;
  _id: string;
}
