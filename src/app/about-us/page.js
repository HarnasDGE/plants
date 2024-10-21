import { OurSkills } from "../components/OurSkills";
import { SmallHero } from "../components/SmallHero";
import { TrainedStaff } from "../components/TrainedStaff";
import { WidthWrapper } from "../components/WidthWrapper";
import { YearsOfExperience } from "../components/YearsOfExperience";
import { TITLE_WEBSITE } from "../constans/mainInfo";

export const metadata = {
  title: `About Us - ${TITLE_WEBSITE}`,
  description: "Czytaj najnowsze artykuły na naszym blogu.",
};

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-[100px] ">
      <SmallHero
        title="About Us"
        description="Czytaj najnowsze artykuły na naszym blogu."
      />
      <h2 className="text-4xl font-extrabold text-center">About Company</h2>
      <YearsOfExperience />
      <WidthWrapper>
        <div className="flex flex-col gap-4 mb-4">
          <h3 className="text-2xl font-bold">Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque et non erat.
            Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa
            uada mi elementum elementum. Nec sapien convallis vulputate rhoncus
            vel dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque et non erat.
            Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer adipiscing erat eget risus sollicitudin pellentesque et non
            erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis
            accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt
            nunc posuere ut.
          </p>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <h3 className="text-2xl font-bold">Vission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque et non erat.
            Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa
            uada mi elementum elementum. Nec sapien convallis vulputate rhoncus
            vel dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque et non erat.
            Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <h3 className="text-2xl font-bold">Goal</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque et non erat.
            Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa
            uada mi elementum elementum. Nec sapien convallis vulputate rhoncus
            vel dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            adipiscing erat eget risus sollicitudin pellentesque et non erat.
            Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut.{" "}
          </p>
        </div>
      </WidthWrapper>
      <OurSkills />
      <TrainedStaff />
    </main>
  );
}
