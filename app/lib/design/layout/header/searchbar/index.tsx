"use client";

import { useEffect, useState } from "react";
import { Search } from "../../../common/search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useCreateQueryStringParams } from "@/app/lib/utils/params/useCreateQueryStringParams";

//1  ==> undefined every things
//2  ==> change Input
//3  4   ==> click search button
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // "" ==> "ماشین"

  // !! Params
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCreateQueryStringParams();
  const searchParam = useSearchParams();

  // !! Variable
  const nameParam = searchParam.get("name") || ""; // "ماشین"

  useEffect(() => {
    setSearchTerm(nameParam);
  }, [nameParam]);
  return (
    <Search
      className="flex-1 text-black"
      searchTerm={searchTerm}
      handleGetValue={(value: string) => setSearchTerm(value)}
      onClick={() => {
        createQueryString({
          pathname,
          router,
          params: [{ name: "searchTerm", value: searchTerm }],
        });
      }}
    />
  );
};

export default SearchBar;
