import { Button } from "./Button";
import { WidthWrapper } from "./WidthWrapper";

export const Cta = () => {
  return (
    <WidthWrapper>
      <div className="w-full rounded px-[100px] py-8 flex flex-col justify-center items-center xl:flex-row xl:justify-between  bg-backgroundThird capitalize xl:mx-10">
        <h2 className="text-textDark text-center xl:text-left">
          We Have <span className="text-main">Solutions</span> For your{" "}
          <span className="text-main">Garden</span>.
        </h2>
        <Button>Get a quote</Button>
      </div>
    </WidthWrapper>
  );
};
