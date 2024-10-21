import { ServiceDetails } from "@/app/components/ServiceDetails";
import { SmallHero } from "@/app/components/SmallHero";
import { WorkingProcess } from "@/app/components/WorkingProcess";
import { TITLE_WEBSITE } from "@/app/constans/mainInfo";
import { services } from "@/app/constans/services";

export const metadata = {
  title: `Service Details - ${TITLE_WEBSITE}`,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book.",
};

export default function Home({ params }) {
  const serviceData = services.find((s) => s.param === params.service); // Wyszukiwanie serwisu na podstawie parametru

  return (
    <main className="w-full flex flex-col gap-[100px] ">
      <SmallHero
        title="Service Details"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book."
      />
      <ServiceDetails service={serviceData} />
      <WorkingProcess desc={false} />
    </main>
  );
}
