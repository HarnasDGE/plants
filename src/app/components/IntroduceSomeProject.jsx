"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { WidthWrapper } from "./WidthWrapper";
import { Button } from "./Button";
import Arrow from "../assets/icons/arrowSecond.svg";
import { Project } from "./Project";
import { projects } from "../constans/projects";
import { CarouselMobile } from "./CarouselMobile";

export const IntroduceSomeProject = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams.get("category");
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam) : 1;

  const categoriesProjects = [
    {
      name: "Garden Care",
      param: "garden-care",
    },
    {
      name: "Lawn Care",
      param: "lawn-care",
    },
    {
      name: "Planting",
      param: "planting",
    },
    {
      name: "Landscape",
      param: "landscape",
    },
  ];

  const ITEMS_PER_PAGE = 8;

  // Mapowanie parametru na nazwę kategorii
  const categoryItem = categoriesProjects.find(
    (item) => item.param === category
  );
  const categoryName = categoryItem ? categoryItem.name : null;

  // Filtrowanie projektów na podstawie parametru kategorii
  const filteredProjects = categoryName
    ? projects.filter((project) => project.category === categoryName)
    : projects;

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const projectsToDisplay = filteredProjects.slice(startIndex, endIndex);

  const handlePagination = (newPage) => {
    if (newPage === 0) return;
    if (newPage > totalPages) return;
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    router.push(`/projects?${params.toString()}`);
  };

  const handleCategoryChange = (newCategory) => {
    const params = new URLSearchParams(searchParams);
    if (newCategory) {
      params.set("category", newCategory);
    } else {
      params.delete("category");
    }
    params.set("page", "1"); // Reset strony do 1 przy zmianie kategorii
    router.push(`/projects?${params.toString()}`);
  };

  return (
    <WidthWrapper>
      <div className="flex flex-col items-center w-3/4 mx-auto">
        <p className="mb-7">Latest Projects</p>
        <h2 className="text-center lg:text-left">
          <span className="text-main">Introduce </span>Some Project
        </h2>
        <p className="text-center lg:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <ul className="mt-14 flex flex-row flex-wrap justify-center gap-3 mb-14">
          <li>
            <Button
              type="narrow"
              onClick={() => handleCategoryChange(null)}
              active={!category}
            >
              View All
            </Button>
          </li>
          {categoriesProjects.map((categoryItem) => (
            <li key={categoryItem.param}>
              <Button
                type="narrow"
                color="second"
                active={category === categoryItem.param}
                onClick={() => handleCategoryChange(categoryItem.param)}
              >
                {categoryItem.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <CarouselMobile>
        {projectsToDisplay.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </CarouselMobile>

      <ul className="grid lg:grid-cols-2 xl:grid-cols-4 mb-14 gap-7 hidden lg:grid">
        {projectsToDisplay.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>

      <div className="w-full flex justify-center gap-4 hidden lg:flex">
        <Button
          type="icon"
          color="second"
          disabled={currentPage <= 1}
          onClick={() => handlePagination(currentPage - 1)}
        >
          <Arrow />
        </Button>

        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            color="second"
            active={currentPage === index + 1}
            onClick={() => handlePagination(index + 1)}
          >
            {index + 1}
          </Button>
        ))}

        <Button
          type="icon"
          disabled={currentPage >= totalPages}
          onClick={() => handlePagination(currentPage + 1)}
        >
          <Arrow className="rotate-180" />
        </Button>
      </div>
    </WidthWrapper>
  );
};
