import { MainContent } from "../ui/MainContent"

type Props = {
  title: string,
}

export const EditProject = ({ title }: Props) => {
  return (
    <MainContent>
      <div id="titleBar"><span>{title}</span><span>Delete</span></div>
    </MainContent>
  )
}
