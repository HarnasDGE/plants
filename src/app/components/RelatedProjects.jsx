import { Carousel } from "./Carousel";
import { Project } from "./Project";
import { WidthWrapper } from "./WidthWrapper";

export const RelatedProjects = ({ projects }) => {
  return (
    <WidthWrapper>
      <h2>Related Projects</h2>
      <Carousel>
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </Carousel>
    </WidthWrapper>
  );
};
