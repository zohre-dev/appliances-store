"use client";
import DropDown from "@/app/lib/design/common/dropdown";
import { useCreateQueryStringParams } from "@/app/lib/utils/params/useCreateQueryStringParams";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const options = [
  {
    label: "همه",
    value: "",
  },
  {
    label: "امتیاز",
    value: "rating",
  },
  {
    label: "فروش",
    value: "sales",
  },
  {
    label: "موجودی",
    value: "stock",
  },
  {
    label: "جدیدترین",
    value: "newest",
  },
  {
    label: "تخفیف",
    value: "discounted",
  },
];
const SortFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const createQueryString = useCreateQueryStringParams();
  const sortbyParam = searchParams.get("sortby") || "";
  const selectedValue = options.find(({ value }) => value === sortbyParam); //for first time:
  //  {
  //   label: "همه",
  //   value: "",
  // },

  return (
    <DropDown
      variant="line"
      options={options}
      placeholder=""
      emptyMessage=""
      onSelect={(selectedOption) => {
        createQueryString({
          pathname,
          router,
          params: [
            {
              name: "sortby",
              value: String(selectedOption.value),
            },
          ],
        });
      }}
      selectedValue={selectedValue}
    />
  );
};
export default SortFilter;
