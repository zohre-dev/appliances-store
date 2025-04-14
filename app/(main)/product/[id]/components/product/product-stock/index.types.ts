import { IProductState } from "@/app/lib/services/product/index.types";
import { ClassNameType } from "@/app/lib/types/classname";

export interface IProps extends ClassNameType {
  product: IProductState;
}
