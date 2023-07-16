import { IconType } from "react-icons";
import { GoHomeFill } from "react-icons/go";

type NavigationButtonProps = {
  icon?: IconType | string;
  iconSize?: number;
  classIcon?: string;
  classButton?: string;
  optionalText?: string;
  handleClick?: () => void;
};

const NavigationButton = ({
  icon: Icon = GoHomeFill,
  iconSize = 20,
  classIcon = "",
  classButton = "",
  optionalText = "",
  handleClick,
}: NavigationButtonProps) => {
  return (
    <>
      <button className={classButton} onClick={handleClick} aria-label="Close">
        {Icon != "NONE" && <Icon className={classIcon} size={iconSize} />}
        {optionalText}
      </button>
    </>
  );
};

export default NavigationButton;
