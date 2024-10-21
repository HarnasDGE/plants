import { SmallHero } from "@/app/components/SmallHero";
import { TITLE_WEBSITE } from "@/app/constans/mainInfo";
import { GridWrapper } from "../components/GridWrapper";
import { Faq } from "../components/Faq";
import { FaqCategories } from "../components/FaqCategories";
import { Search } from "../components/Search";
import { Sidebar } from "../components/Sidebar";
import { AskYourQuestion } from "../components/AskYourQuestion";
import { GetInTouch } from "../components/GetInTouch";
import { Map } from "../components/Map";

export const metadata = {
  title: `Faq - ${TITLE_WEBSITE}`,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book.",
};

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-[100px] ">
      <SmallHero
        title="Faq"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book."
      />
      <GridWrapper>
        <div className="flex flex-col gap-10 h-fit">
          <Faq desc={false} displayImage={false} />
          <AskYourQuestion />
        </div>

        <Sidebar>
          <Search title=" Have Any Questions?" />
          <FaqCategories />
          <GetInTouch />
        </Sidebar>
      </GridWrapper>
      <Map />
    </main>
  );
}
