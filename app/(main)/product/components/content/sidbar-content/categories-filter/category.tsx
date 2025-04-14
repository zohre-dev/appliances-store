import { Text } from "@/app/lib/design/common/text";
import { ICategoriesState } from "@/app/lib/services/categories/index.types";
import { useCreateQueryStringParams } from "@/app/lib/utils/params/useCreateQueryStringParams";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

interface IProps {
  item: ICategoriesState;
}
const Category: FC<IProps> = ({ item }) => {
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryStringParams();
  const searchParams = useSearchParams();
  const categoryIdParam = searchParams.get("category") || "";

  return (
    <section
      className="p-2 cursor-pointer"
      onClick={() => {
        createQueryString({
          pathname: pathname,
          router: router,
          params: [
            {
              name: "category",
              value: item._id,
            },
          ],
        });
      }}
    >
      <Text
        textSize="xl"
        className={`${item._id === categoryIdParam ? "text-blue-400" : ""}`}
      >
        {item.name}
      </Text>
    </section>
  );
};

export default Category;
