import { SmallHero } from "@/app/components/SmallHero";
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

export default function Home({ project }) {
  if (!project) {
    return <div>Nie ma takiego projektu</div>;
  }
  return (
    <main className="w-full flex flex-col gap-[100px] ">
      <SmallHero
        title="Project Details"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book."
      />
      <ProjectDetails project={project} />
      <RelatedProjects projects={projects} />
    </main>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    project: project.param,
  }));
}
