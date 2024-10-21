import { CustomGradientDiv } from "../components/CustomGradientDiv";

import ThankYouImage from "../assets/images/thankyou.png";
import TwoBlatsImage from "../assets/twoBlats.png";
import { TITLE_WEBSITE } from "../constans/mainInfo";
import { SmallHero } from "../components/SmallHero";
import { WidthWrapper } from "../components/WidthWrapper";
export const metadata = {
  title: `Thank You - ${TITLE_WEBSITE}`,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book.",
};

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-[100px] ">
      <SmallHero title="Thank You" description="" />
      <WidthWrapper className="flex flex-col items-center -mt-[200px] z-10 w-3/4 lg:w-full">
        <div className="bg-background w-full">
          <div
            className="bg-bottom bg-contain bg-no-repeat w-full h-[200px] content-['']"
            style={{
              backgroundImage: `url(${ThankYouImage.src})`,
              minHeight: "200px",
              minWidth: "100%",
            }}
          />
        </div>
        <CustomGradientDiv className="flex flex-col justify-center items-center gap-5">
          <h2>Thank You!</h2>
          <p className="text-center w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque et non erat.
            Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien,
          </p>
          <div
            className="absolute -z-10 -bottom-20 -right-20 bg-top bg-no-repeat bg-cover h-[300px] w-[300px] "
            style={{ backgroundImage: `url(${TwoBlatsImage.src})` }}
          ></div>
        </CustomGradientDiv>
      </WidthWrapper>
    </main>
  );
}
