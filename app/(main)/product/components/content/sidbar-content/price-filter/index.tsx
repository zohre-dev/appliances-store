"use client";

import PriceRangeSlider from "@/app/lib/design/common/price-slider";
import { useGetFilters } from "@/app/lib/hooks/filters";
import { useCreateQueryStringParams } from "@/app/lib/utils/params/useCreateQueryStringParams";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PriceFilter = () => {
  // !! Params
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryStringParams();
  // !! Fetch
  const { data } = useGetFilters({ field: "price" });
  const getPriceFilter = data?.data[0];

  // !! Variable
  const minRange = getPriceFilter?.minValue;
  const maxRange = getPriceFilter?.maxValue;

  const initialMinValue = searchParam.get("minPrice") || minRange;
  const initialMaxValue = searchParam.get("maxPrice") || maxRange;
  return (
    <div className="mt-4 border border-blue-500">
      {getPriceFilter && (
        <PriceRangeSlider
          className="w-[90%]"
          minRange={Number(minRange)}
          maxRange={Number(maxRange)}
          initialMinValue={Number(initialMinValue)}
          initialMaxValue={Number(initialMaxValue)}
          currency="toman"
          onChange={(minValue, maxValue) => {
            createQueryString({
              pathname: pathname,
              router: router,
              params: [
                {
                  name: "minPrice",
                  value: String(minValue),
                },
                {
                  name: "maxPrice",
                  value: String(maxValue),
                },
              ],
            });
          }}
        />
      )}
    </div>
  );
};
export default PriceFilter;
