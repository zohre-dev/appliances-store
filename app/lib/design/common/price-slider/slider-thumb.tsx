import { FC } from "react";

interface IProps {
  position: number;
  onMouseDown: (e: React.MouseEvent) => void;
}

const SliderThumb: FC<IProps> = ({ position, onMouseDown }) => {
  return (
    <div
      className="absolute w-6 h-6 -top-2 bg-indigo-600 cursor-pointer "
      style={{
        left: `${position}%`,
      }}
      onMouseDown={onMouseDown}
    ></div>
  );
};

export default SliderThumb;
