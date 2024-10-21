import ArrowIcon from "../assets/icons/arrow.svg";

export const LiItem = ({ children }) => {
  return (
    <li className="flex gap-5 items-start">
      <ArrowIcon className="-rotate-90 h-4 w-4 scale-150 fill-main" />
      {children}
    </li>
  );
};
