"use client";

import { Text } from "@/app/lib/design/common/text";
import { useCreateQueryStringParams } from "@/app/lib/utils/params/useCreateQueryStringParams";
import { usePathname, useRouter } from "next/navigation";
import Category from "./category";
import { useGetCategories } from "@/app/lib/hooks/categories";

const categoriesList = [
  {
    _id: "1",
    name: "یخچال وفریزر",
    description: "desc 1",
  },
  {
    _id: "2",
    name: "ماشین لباسشویی",
    description: "desc 2",
  },
  {
    _id: "3",
    name: "ماشین ظرف شویی",
    description: "desc 3",
  },
  {
    _id: "4",
    name: "مایکروویو و مایکروفر",
    description: "desc 4",
  },
  {
    _id: "5",
    name: "کولر گازی",
    description: "desc 5",
  },
  {
    _id: "6",
    name: "اجاق گاز",
    description: "desc 6",
  },
  {
    _id: "7",
    name: "جاروبرقی",
    description: "desc 7",
  },

  {
    _id: "8",
    name: "چرخ گوشت",
    description: "desc 8",
  },
  {
    _id: "9",
    name: "آبمیوه گیری",
    description: "desc 9",
  },
  {
    _id: "10",
    name: "تلویزیون",
    description: "desc 10",
  },
];
const CategoriesFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryStringParams();
  //!!  Fetch categories
  const { data: getCategories } = useGetCategories();
  return (
    <section className="flex flex-col gap-4 border border-green-500">
      <section
        className="p-2 cursor-pointer"
        onClick={() =>
          createQueryString({
            pathname: pathname,
            router: router,
            params: [
              {
                name: "category",
                value: "",
              },
            ],
          })
        }
      >
        <Text textSize="xl" className="text-gray-800">
          همه
        </Text>
      </section>
      {getCategories?.data.categories.map((category) => (
        <Category item={category} key={category._id} />
      ))}
    </section>
  );
};

export default CategoriesFilter;
