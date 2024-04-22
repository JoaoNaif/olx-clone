import { ReactNode } from "react";

interface Props {
  description: string;
  children: ReactNode;
}

export const HoverDescription: React.FC<Props> = ({
  description,
  children,
}) => {
  return (
    <div className="relative inline-block">
      <div className="group">
        {children}
        <div className="opacity-0 w-24 bg-gray-800 text-white text-center text-xs rounded-lg py-2 absolute z-10 bottom-0 left-1/2 mb-7 group-hover:opacity-100 transition-opacity duration-500">
          {description}
        </div>
      </div>
    </div>
  );
};
