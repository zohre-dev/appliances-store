export interface IGetProductProps {
  category?: string;
  page?: number;
  limit?: number;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "rating" | "sales" | "stock" | "newest" | "discounted";
}
