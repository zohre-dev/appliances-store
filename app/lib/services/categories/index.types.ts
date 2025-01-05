export interface ICategoriesState {
  _id: string;
  name: string;
  description: string;
}

export interface IGetCategoriesResponse {
  data: {
    categories: ICategoriesState[];
  };
  error: any;
  message: string;
}
