export type ISortbyFilterState =
  | "rating"
  | "sales"
  | "stock"
  | "newest"
  | "discounted";

export interface IGetProductProps {
  category?: string;
  page?: number;
  limit?: number;
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  sortby?: ISortbyFilterState;
  brand?: string;
}
