import { IconType } from "react-icons";
import { GoHomeFill } from "react-icons/go";

type NavigationButtonProps = {
  icon?: IconType;
  iconSize?: number;
  classIcon?: string;
  classButton?: string;
  handleClick?: () => void;
};

const NavigationButton = ({
  icon: Icon = GoHomeFill,
  iconSize = 20,
  classIcon = "",
  classButton = "",
  handleClick,
}: NavigationButtonProps) => {
  return (
    <button className={classButton} onClick={handleClick}>
      <Icon className={classIcon} size={iconSize} />
    </button>
  );
};

export default NavigationButton;
