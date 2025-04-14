import { useQuery } from "@tanstack/react-query";
import { IGetCommentsProps } from "./index.types";
import { getCommentsByProductId } from "../../services/comments";

const useGetComments = ({ productId, params }: IGetCommentsProps) => {
  return useQuery(["fetch-comments", productId, params], {
    queryFn: () => {
      return getCommentsByProductId({ productId, params });
    },
  });
};

export { useGetComments };
