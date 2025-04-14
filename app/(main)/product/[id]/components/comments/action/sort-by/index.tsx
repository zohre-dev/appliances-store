"use client";

import DropDown from "@/app/lib/design/common/dropdown";
import { OptionState } from "@/app/lib/types/option";
import { useCreateQueryStringParams } from "@/app/lib/utils/params/useCreateQueryStringParams";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Options = [
  { label: "قدیمی ترین", value: "asc" },
  { label: "جدید ترین", value: "desc" },
];

const SortBy = () => {
  const searchParams = useSearchParams();
  const createQueryString = useCreateQueryStringParams();
  const pathname = usePathname();
  const router = useRouter();

  const sortByParam = searchParams.get("sortby") || "";

  const selectedValue =
    Options.find(({ value }) => {
      return value === sortByParam;
    }) || Options[0];

  return (
    <div className="mr-auto">
      <DropDown
        className="w-[300px]"
        variant="button"
        options={Options}
        onSelect={({ value }: OptionState) => {
          createQueryString({
            pathname,
            router,
            params: [
              {
                name: "sortby",
                value: String(value),
              },
              {
                name: "page",
                value: "1",
              },
            ],
          });
        }}
        placeholder=""
        emptyMessage="گزینه ایی موجود نیست"
        buttonDropdownClasses="shadow-none bg-primray-50"
        dropdownMenuClasses="bg-red-500"
        selectedValue={selectedValue}
      />
    </div>
  );
};

export default SortBy;
