export interface IBrandState {
  _id: string;
  name: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGetBrandsResponse {
  data: IBrandState[];
  error: any;
  message: string;
}
