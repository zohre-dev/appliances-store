import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

// IntrinsicElements contains a list of all possible native JSX tags
interface IntrinsicElements {
  div: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  span: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
}

type IntrinsicElementsNames = keyof IntrinsicElements; //makes union type
//type IntrinsicElementsNames= "div" | "span" | "h1" |"p"

interface IProps {
  element: keyof IntrinsicElements; //keyof creates union type. "div" | "sapn" | "h1" |"p"
}

export const MyComponent: FC<IProps> = ({ element }) => {
  const Element = element as keyof IntrinsicElements;
  return <Element>salam</Element>;
};
