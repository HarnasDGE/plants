import { Brochure } from "./Brochure";
import { Details } from "./Details";
import { GridWrapper } from "./GridWrapper";
import { MoreAboutUs } from "./MoreAboutUs";
import { ProjectInformation } from "./ProjectInformation";
import { Sidebar } from "./Sidebar";
export const ProjectDetails = ({ project }) => {
  return (
    <GridWrapper>
      <Details project={project} />
      <Sidebar>
        <ProjectInformation project={project} />
        <Brochure />
        <MoreAboutUs />
      </Sidebar>
    </GridWrapper>
  );
};
