import { IBrandState } from "../brands/index.types";
import { ICategoriesState } from "../categories/index.types";

export interface IUserState {
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface IReplyCommentState {
  _id: string;
  comment: string;
  user: IUserState;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICommentState {
  _id: string;
  product: {
    _id: string;
    category: ICategoriesState;
    brand: IBrandState;
  };
  user: IUserState;
  text: string;
  replies: IReplyCommentState[];
  createdAt: string;
  updatedAt: string;
}

export interface IGetCommentsResponse {
  data: {
    totalComments: number;
    totalPages: number;
    currentPage: number;
    comments: ICommentState[];
    next: number;
    prev: number;
  };
  error: number;
  message: string;
}
