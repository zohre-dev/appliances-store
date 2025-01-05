import api from "..";
import { IGetProductProps } from "../../hooks/product/index.types";
import { API_URLS } from "../../types/apiUrls";
import { createParams } from "../../utils/create-params";

import {
  IGetProductByIdArgs,
  IGetProductByIdResponse,
  IGetProductsResponse,
} from "./index.types";

// const getProducts = async (params: GetProductProps) => {
//   const newParams = createParams(params);
//   const response = await api.get<GetProductsResponse>(`/product?${newParams}`);
//   return response.data;
// };

export const getProductById = async ({ id }: IGetProductByIdArgs) => {
  const response = await api.get<IGetProductByIdResponse>(
    `/product/${id}`
    // API_URLS.product.replace(":id", id)
  ); //  product = "/product/:id",

  return response.data;
};

export const getProducts = async (params: IGetProductProps) => {
  const newParams = createParams(params);
  const response = await api.get<IGetProductsResponse>(`/product?${newParams}`);
  return response.data;
};
