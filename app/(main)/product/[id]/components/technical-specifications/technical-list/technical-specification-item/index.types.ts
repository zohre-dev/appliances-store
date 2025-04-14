import { ITechnicalSpecificationsState } from "@/app/lib/services/product/index.types";

export interface IProps {
  isDimmed: boolean; //کم نور بشه؟
  specification: ITechnicalSpecificationsState;
}
