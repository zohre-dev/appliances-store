// breakpoints=
// {     0: { slidesPerView: 1 }  ,
//                   0: { slidesPerView: 1 }
//                 }

export interface IProps {
  slidesPerView?: number;
  spaceBetween?: number;
  autoplayDelay?: number;
  className?: string;
  children: React.ReactNode;
  enableNavigation?: boolean;
  breakpoints?: {
    [key: number]: { slidesPerView: number; [key: string]: any };
  };
}
