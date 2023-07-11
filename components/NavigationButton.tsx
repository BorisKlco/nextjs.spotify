import { IconType } from "react-icons";

type NavigationButtonProps = {
  icon: IconType;
  handleClick: () => void
};

const NavigationButton = ({ icon: Icon, handleClick }: NavigationButtonProps) => {
  return (
    <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition" 
    onClick={handleClick}>
      <Icon className="text-white" size={35} />
    </button>
  );
};

export default NavigationButton;
