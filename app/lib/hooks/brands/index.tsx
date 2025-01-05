import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../../services/brands";

export const useGetBrands = () => {
  const querkey = ["fetch-brands"];
  return useQuery(querkey, {
    queryFn: () => {
      return getBrands();
    },
  });
};

// export { useGetBrands };
