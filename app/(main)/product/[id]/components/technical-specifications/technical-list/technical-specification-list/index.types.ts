import { ITechnicalSpecificationsState } from "@/app/lib/services/product/index.types";

export interface IProps {
  sepecifications: ITechnicalSpecificationsState[];
  showMore: boolean;
  onToggleShowMore: () => void;
}
