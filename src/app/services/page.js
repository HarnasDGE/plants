import { CallUs } from "../components/CallUs";
import { ServicesWeProvide } from "../components/ServicesWeProvide";
import { SmallHero } from "../components/SmallHero";
import { TrainedStaff } from "../components/TrainedStaff";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { WorkingProcess } from "../components/WorkingProcess";
import { TITLE_WEBSITE } from "../constans/mainInfo";

export const metadata = {
  title: `Service - ${TITLE_WEBSITE}`,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book.",
};

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-[100px] ">
      <SmallHero
        title="Service"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book."
      />
      <ServicesWeProvide />
      <WhyChooseUs />
      <WorkingProcess />
      <CallUs />
      <TrainedStaff />
    </main>
  );
}
