import { useQuery } from "@tanstack/react-query";
import { IGetFilterParams } from "./index.types";
import { getFilters } from "../../services/filters";

const useGetFilters = (params: IGetFilterParams) => {
  return useQuery(["fetch-filter", params], {
    queryFn: () => {
      return getFilters(params);
    },
  });
};

export { useGetFilters };
