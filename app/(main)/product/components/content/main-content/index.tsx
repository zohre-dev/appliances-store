"use client";

import { cn } from "@/app/lib/utils/cn";
import { FC } from "react";
import { IProps } from "./index.types";
import { useGetProducts } from "@/app/lib/hooks/product";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useGetFilters } from "@/app/lib/hooks/filters";
import { ISortbyFilterState } from "@/app/lib/hooks/product/index.types";
import ProductList from "./product-list";
import { Pagination } from "@nextui-org/react";
import { useCreateQueryStringParams } from "@/app/lib/utils/params/useCreateQueryStringParams";

// category?: string;
//   page?: number;
//   limit?: number;
//   name?: string;
//   minPrice?: number;
//   maxPrice?: number;
//   sortBy?: "rating" | "sales" | "stock" | "newest" | "discounted";
//   brand?: string;
// ***************************************************
//useGetFilters:
// {
//   data: {
//          data: [ {field: "price",maxValue: 100000000,​minValue: 100000 ,...} , {}],
//          error: null,
//          message: "تمامی فیلترها دریافت شدند"
//   }
// }

const MainContent: FC<IProps> = ({ className }) => {
  // !! Fetch
  const { data: getFilters } = useGetFilters({ field: "price" });
  const getPriceFilter = getFilters?.data[0];

  //  !! Param Hook
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryStringParams();

  // !! Get Params
  const category = searchParam.get("category") || "";
  const page = Number(searchParam.get("page")) || 1;
  const limit = 10;
  const name = searchParam.get("name") || "";
  const minPrice =
    Number(searchParam.get("minPrice")) || getPriceFilter?.minValue;
  const maxPrice =
    Number(searchParam.get("maxPrice")) || getPriceFilter?.maxValue;
  const sortby = (searchParam.get("sortby") as ISortbyFilterState) || "";
  // !! Fetch
  const { data: getProducts } = useGetProducts({
    category,
    page,
    limit,
    name,
    minPrice,
    maxPrice,
    sortby,
  });
  const products = getProducts?.data.products;
  const handlePagination = (numberPage: number) => {
    createQueryString({
      pathname,
      router,
      params: [
        {
          name: "page",
          value: String(numberPage),
        },
      ],
    });
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-10 border border-blue-600",
        className
      )}
    >
      {products && <ProductList products={products} />}
      <Pagination
        className="border border-green-500"
        onChange={handlePagination}
        showControls
        initialPage={page}
        total={getProducts?.data.totalPages || 0}
      />
    </div>
  );
};

export default MainContent;

// {
//   data: {
//     data: {
//       totalProducts: 34,
//       totalPages:4
//       products:[{...} , {....}]
//     }
//   }
// }
