import api from "..";
import { API_URLS } from "../../types/apiUrls";

import { IGetCategoriesResponse } from "./index.types";

export const getCategories = async () => {
  const response = await api.get<IGetCategoriesResponse>(API_URLS.categories);
  return response.data;
};
