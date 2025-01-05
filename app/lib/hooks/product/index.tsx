import { useQuery } from "@tanstack/react-query";
import { IGetProductByIdArgs } from "../../services/product/index.types";
import { getProductById, getProducts } from "../../services/product";
import { IGetProductProps } from "./index.types";

const useGetProductById = ({ id }: IGetProductByIdArgs) => {
  return useQuery(["product", id], {
    queryFn: () => {
      return getProductById({ id });
    },
  });
};

const useGetProducts = (params: IGetProductProps) => {
  const queryKeys = ["fetch-products", params];
  return useQuery(queryKeys, {
    queryFn: () => {
      return getProducts(params);
    },
  });
};

export { useGetProductById, useGetProducts };
