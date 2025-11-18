import type { ReactNode } from "react"

type Props = {
  // icon?: IconType,
  icon?: ReactNode,
  text: string,
  color: string,
  bgColor: string,
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ icon, text, color, bgColor, handleClick, ...rest }: Props) => {
  console.log('props ', color, bgColor)
  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-between gap-2 ${color} ${bgColor} p-4 rounded-xl text-2xl w-auto`} {...rest}>
      {icon}
      <span>{text}</span>
    </button >
  )
}
