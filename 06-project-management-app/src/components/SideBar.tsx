import { Button } from "../ui/Button"
import { FaPlus } from "react-icons/fa"

type Props = {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

const SideBar = ({ handleClick }: Props) => {
  return (
    <div className="flex flex-col p-4 items-center bg-amber-500">
      <p className="text-4xl mb-8 text-white">YOUR PROJECTS</p>
      <Button handleClick={handleClick} icon={<FaPlus className="w-4 h-4" />} text='Add Project' color='text-gray-200' bgColor='bg-gray-800' />
    </div>
  )
}
export default SideBar;