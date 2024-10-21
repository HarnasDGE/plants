import { Brochure } from "./Brochure";
import { GridWrapper } from "./GridWrapper";
import { MoreAboutUs } from "./MoreAboutUs";
import { ServicesList } from "./ServicesList";
import { Sidebar } from "./Sidebar";

export const ServiceDetails = ({ service }) => {
  return (
    <GridWrapper>
      <div>
        <div
          className="h-[440px] w-full bg-cover bg-center bg-no-repeat hidden lg:block"
          style={{ backgroundImage: `url(${service.mainImageUrl})` }}
        ></div>
        <div className="flex flex-col  ">
          <h2>{service.name}</h2>
          {service.about.map((s) => (
            <p>{s}</p>
          ))}
        </div>
        <div
          className="h-[440px] w-full bg-cover bg-center bg-no-repeat lg:hidden"
          style={{ backgroundImage: `url(${service.mainImageUrl})` }}
        ></div>
        <div className="flex flex-col  ">
          <h2>Adventages of {service.name}</h2>
          {service.adventages.map((s) => (
            <p>{s}</p>
          ))}
        </div>
        <div className="flex gap-7 ">
          <div
            className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${service.images[0]})` }}
          ></div>
          <div
            className="w-full h-[200px] bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${service.images[1]})` }}
          ></div>
        </div>
      </div>
      <div>
        <Sidebar>
          <ServicesList />
          <Brochure />
          <MoreAboutUs />
        </Sidebar>
      </div>
    </GridWrapper>
  );
};
