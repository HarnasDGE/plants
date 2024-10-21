import { WidthWrapper } from "./WidthWrapper";

export const GridWrapper = ({ children }) => {
  return (
    <WidthWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-[70%_25%] px-5  gap-7">
        {children}
      </div>
    </WidthWrapper>
  );
};
