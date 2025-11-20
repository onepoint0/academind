import type { ReactNode } from 'react';

type Props = {
  // icon?: IconType,
  icon?: ReactNode;
  text: string;
  color: string;
  bgColor: string;
  hoverColor?: string;
  hoverBgColor?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ icon, text, color, bgColor, hoverColor, hoverBgColor, handleClick, ...rest }: Props) => {
  const fullClass = `flex items-center justify-between gap-2 mb-8 ${color} ${bgColor} p-4 rounded-xl text-2xl w-auto cursor-pointer ${hoverColor} ${hoverBgColor}`;
  return (
    <button onClick={handleClick} className={fullClass} {...rest}>
      {icon}
      <span>{text}</span>
    </button>
  );
};
