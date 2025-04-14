export interface IGetCommentsProps {
  productId: string;
  params: Partial<{
    page: number;
    limit: number;
    sortby: string;
  }>;
}
