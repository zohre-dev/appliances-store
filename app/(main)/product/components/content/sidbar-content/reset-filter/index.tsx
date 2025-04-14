"use client";

import { getAllSearchParams } from "@/app/lib/utils/params/get-all-search-params";
import { createFilter } from "@/app/lib/utils/params/has-filter";
import { Button } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { MdClose } from "react-icons/md";

const ResetFilter = () => {
  // !! Params
  const router = useRouter();
  const searchParam = useSearchParams();

  const getAllParams = getAllSearchParams(searchParam);
  const hasFilter = createFilter(getAllParams); //true or false

  return (
    <>
      {hasFilter && (
        <Button
          className="w-fit flex items-center gap-2"
          color="danger"
          endContent={<MdClose />}
          onPress={() => router.push("?")}
        >
          حذف فیلتر
        </Button>
      )}
    </>
  );
};
export default ResetFilter;
