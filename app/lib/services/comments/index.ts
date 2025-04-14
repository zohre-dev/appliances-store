import api from "..";
import { IGetCommentsProps } from "../../hooks/comments/index.types";
import { createParams } from "../../utils/create-params";
import { IGetCommentsResponse } from "./index.types";

const getCommentsByProductId = async (data: IGetCommentsProps) => {
  const { productId, params } = data;
  const createQuery = createParams(params);
  const response = await api.get<IGetCommentsResponse>(
    `/comment/${productId}?${createQuery}`
  );
  return response.data;
};

export { getCommentsByProductId };
