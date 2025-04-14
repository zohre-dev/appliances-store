"use client";

import Animation from "@/app/lib/design/common/animation";
import { LinkContainer } from "@/app/lib/design/common/link-container";
import { Text } from "@/app/lib/design/common/text";
import { useGetCategories } from "@/app/lib/hooks/categories";

import { LeftArrowContainIcon } from "@/app/lib/design/common/icons";
import { cn } from "@/app/lib/utils/cn";

export const CategorySideBar = () => {
  // !! Fetch Categories
  const { data: getCategories, isLoading } = useGetCategories();

  return (
    <div className={cn("flex flex-col gap-3 max-h-[65vh]")}>
      {isLoading ? (
        <Animation />
      ) : (
        getCategories &&
        getCategories?.data.categories.map(({ _id, name }, index) => (
          <LinkContainer
            key={_id}
            href={`/product?category=${_id}`}
            classes="flex items-center justify-between border-b p-3 hover:bg-teal-600 hover:text-white hover:rounded "
          >
            <div>
              <Text as="p" textSize="lg">
                {name}
              </Text>
            </div>
            <LeftArrowContainIcon />
          </LinkContainer>
        ))
      )}
    </div>
  );
};
