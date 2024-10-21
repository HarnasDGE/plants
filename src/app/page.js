import { CallUs } from "./components/CallUs";
import { Faq } from "./components/Faq";
import { Hero } from "./components/Hero";
import { InsightsAndArticles } from "./components/InsightsAndArticles";
import { ServicesWeProvide } from "./components/ServicesWeProvide";
import { TrainedStaff } from "./components/TrainedStaff";
import { WhatClientsSaying } from "./components/WhatClientsSaying";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { WorkingProcess } from "./components/WorkingProcess";
import { YearsOfExperience } from "./components/YearsOfExperience";
export default function Home() {
  return (
    <main className="w-full flex flex-col gap-[100px]">
      <Hero />
      <ServicesWeProvide />
      <YearsOfExperience />
      <WhyChooseUs />
      <WorkingProcess />
      <CallUs />
      <TrainedStaff />
      <WhatClientsSaying />
      <Faq />
      <InsightsAndArticles />
    </main>
  );
}
