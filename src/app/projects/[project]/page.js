import { SmallHero } from "@/app/components/SmallHero";
import { TITLE_WEBSITE } from "@/app/constans/mainInfo";
import Project1Image from "@/app/assets/projects/project1.jpg";
import Project2Image from "@/app/assets/projects/project2.jpg";
import Project3Image from "@/app/assets/projects/project3.jpg";
import { ProjectDetails } from "@/app/components/ProjectDetails";
import { RelatedProjects } from "@/app/components/RelatedProjects";
import { projects } from "@/app/constans/projects";

export const metadata = {
  title: `Project Details - ${TITLE_WEBSITE}`,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book.",
};

export default function Home() {
  const projectItem = {
    title: "Garden Care in London",
    param: "garden-care-in-london",
    client: "London City University",
    location: "London, Gr. Weed Street, The Great Britain",
    mainImageUrl: Project1Image.src,
    summary: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
    ],
    challenges: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
    ],
    steps: [
      "Integer adipiscing. Maecenas nibh dolor, malesuada bibendum a, sagittis accumsan ipsum.",
      "Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada bibendum a, sagittis accumsan ipsum.",
      "Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. pellentesque et non erat. Maecenas nibh dolor, malesuada bibendum a, sagittis accumsan ipsum.",
      "Integer adipiscing erat eget risus sollicitudin pellentesque sagittis accumsan ipsum. sagittis accumsan ipsum. et non erat. Maecenas nibh dolor, malesuada bibendum a, sagittis accumsan ipsum.",
    ],
    categories: ["Garden Care", "Lawn Care", "Planting"],
    start: "2024-10-05T00:00:00.000Z",
    end: "2024-12-05T00:00:00.000Z",
    price: 5020,
    images: [Project2Image.src, Project3Image.src],
  };
  return (
    <main className="w-full flex flex-col gap-[100px] ">
      <SmallHero
        title="Project Details"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book."
      />
      <ProjectDetails project={projectItem} />
      <RelatedProjects projects={projects} />
    </main>
  );
}
