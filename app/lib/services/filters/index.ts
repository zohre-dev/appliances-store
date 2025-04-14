import api from "..";
import { IGetFilterParams } from "../../hooks/filters/index.types";
import { IGetFiltersResponse } from "./index.types";

const getFilters = async (params: IGetFilterParams) => {
  const reponse = await api.get<IGetFiltersResponse>(
    `/filters?field=${params.field}`
  );
  return reponse.data;
};

export { getFilters };

// {
//   data: {
//          data: [ {field: "price",maxValue: 100000000,​minValue: 100000 ,...}],
//          error: null,
//          message: "تمامی فیلترها دریافت شدند"
//   }
// }
