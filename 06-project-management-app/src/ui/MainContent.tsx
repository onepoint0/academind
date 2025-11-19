import type { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

export const MainContent = ({ children }: Props) => {
  return (
    <div className='flex flex-col grow items-center justify-center'>
      {children}
    </div>
  )
}
