import api from "..";
import { IGetBrandsResponse } from "./index.types";

const getBrands = async () => {
  const response = await api<IGetBrandsResponse>("/brand");

  return response.data;
};

export { getBrands };
