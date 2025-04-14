import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useCallback } from "react";

interface IParam {
  name: string;
  value: string;
}

interface ISearchParam {
  pathname: string;
  router: AppRouterInstance;
  params: IParam[];
}
// http://localhost:3000/product?searchTerm=jaroo
//pathname ===>    /product
// window.location.search ===>  ?searchTerm=jaroo
export const useCreateQueryStringParams = () => {
  return useCallback(({ pathname, router, params }: ISearchParam) => {
    //params: [{ name: "searchTerm", value: "جاروبرقی" }]
    const searchParams = new URLSearchParams(window.location.search);
    params.forEach(({ name, value }) => {
      //searchParams:URLSearchParams =  { searchTerm → "jaroo"}
      if (value) searchParams.set(name, value);
      else searchParams.delete(name);
    });
    const newUrl = `${pathname}?${String(searchParams)}`;
    ("/product?searchTerm=jaroo");
    router.push(newUrl, { scroll: false });
  }, []);
};
