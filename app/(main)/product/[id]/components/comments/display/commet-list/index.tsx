"use client";

import { useGetComments } from "@/app/lib/hooks/comments";
import SortBy from "../../action/sort-by";
import SubmitComment from "../../action/submit-commnet";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { Text } from "@/app/lib/design/common/text";
import CommentItem from "../comment-item";
import { Pagination } from "@nextui-org/react";
import { useCreateQueryStringParams } from "@/app/lib/utils/params/useCreateQueryStringParams";

const CommentList = () => {
  const param = useParams(); //قبل علامت سوال
  const searchParams = useSearchParams(); //بعد از علامت سوال
  const createQueryParam = useCreateQueryStringParams();
  const router = useRouter();
  const pathname = usePathname();

  // !! Param Variable
  const productId = param.id;
  const page = Number(searchParams.get("page")) || 1;
  const sortby = searchParams.get("sortby") || "";
  const limit = 5;

  const { data } = useGetComments({
    productId: String(productId),
    params: {
      page,
      limit,
      sortby,
    },
  });

  const handlePagination = (numberPagination: number) => {
    createQueryParam({
      router,
      pathname,
      params: [
        {
          name: "page",
          value: String(numberPagination),
        },
      ],
    });
  };

  const comments = data?.data.comments;
  const isRender = comments && comments.length > 0;

  return (
    <div className="flex flex-col gap-6 p-6 shadow rounded-2xl border-2 border-green-500">
      <SubmitComment />
      {isRender ? (
        <>
          <SortBy />
          {comments.map((comment) => {
            return <CommentItem comment={comment} key={comment._id} />;
          })}
          <Pagination
            showControls
            onChange={handlePagination}
            page={page}
            total={data?.data.totalPages || 0}
          />
        </>
      ) : (
        <Text textSize="lg">دیدگاهی ثبت نشده</Text>
      )}
    </div>
  );
};

export default CommentList;
