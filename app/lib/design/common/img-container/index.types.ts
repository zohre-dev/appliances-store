export interface IProps {
  classes?: string;
  src: string;
}

export interface ILoadImageProps {
  width: number;
  quality: number;
  src: string;
}

export type PartialLoadImageProps = Partial<ILoadImageProps>;
