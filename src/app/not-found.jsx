import { Button } from "./components/Button";
import { Search } from "./components/Search";
import { SmallHero } from "./components/SmallHero";

import { WidthWrapper } from "./components/WidthWrapper";
import { TITLE_WEBSITE } from "./constans/mainInfo";
import Error404Image from "./assets/images/error404.png";
import Image from "next/image";
export const metadata = {
  title: `Error 404 - ${TITLE_WEBSITE}`,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book.",
};

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-[100px] ">
      <SmallHero
        title="Error 404"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book."
      />
      <WidthWrapper className="flex flex-col gap-7 items-center text-center">
        <div className="bg-gradient-to-b from-second to-main inline-block text-transparent bg-clip-text text-[144px] font-extrabold">
          404
        </div>
        <h2>Oops! That page can’t be found!</h2>
        <p>Sorry, but the page you are looking for does not existing</p>
        <Search />
        <Button link="/" type="wide" className="hidden lg:flex">
          Go To home page
        </Button>
        <Button link="/" type="fullWidth" className="lg:hidden">
          Go To Home Page
        </Button>
        <Image src={Error404Image} layout="responsive" />
      </WidthWrapper>
    </main>
  );
}
