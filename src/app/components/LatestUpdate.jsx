"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { WidthWrapper } from "./WidthWrapper";
import ArrowIcon from "../assets/icons/arrow.svg";
import { Button } from "./Button";
import { Pagination } from "./Pagination";
import { postsDb } from "../data/postsDb";

export const LatestUpdate = () => {
  const articlesPerPage = 6;
  const totalPages = Math.ceil(postsDb.length / articlesPerPage);
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (page && !isNaN(page)) {
      const pageNumber = parseInt(page, 10);
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
      }
    }
  }, [page, totalPages]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changePage = (newPage) => {
    window.history.pushState(null, "", `?page=${newPage}`);
    setCurrentPage(newPage);
    scrollToTop();
  };

  const paginatedArticles = postsDb.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date
      .toLocaleDateString("en-US", options)
      .toUpperCase()
      .replace(",", " -");
  };

  return (
    <WidthWrapper>
      <div className="text-center">
        <p className="font-xl">Blogs & News</p>
        <h2>
          What's
          <span className="text-main"> Latest Update </span>in Our Work
        </h2>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {paginatedArticles.map((article) => (
          <li
            key={article.id}
            className="relative h-full min-w-[350px] bg-transparent rounded-xl overflow-hidden z-0 border border-solid border-postBorder transition-all group flex flex-col justify-between pb-5"
          >
            <Link
              href={`/blog/${article.id}`}
              className="flex-grow flex flex-col"
            >
              <div className="h-[200px] rounded-t-xl z-0 overflow-hidden">
                <div
                  className="bg-center bg-cover bg-no-repeat h-full w-full transition-all group-hover:blur-sm group-hover:scale-125"
                  style={{ backgroundImage: `url(${article.image})` }}
                ></div>
              </div>
              <div className="relative w-full px-5 pt-4 bg-transparent h-[50%] z-10 flex flex-col flex-grow">
                <div className="flex justify-between items-center">
                  <Button type="narrow">{article.categories[0]}</Button>
                  <p className="font-bold text-main underline">
                    {formatDate(article.date)}
                  </p>
                </div>
                <h3 className="mt-7 text-2xl font-bold overflow-hidden transition-all group-hover:text-main">
                  {article.title}
                </h3>
                <p className="mt-5 text-sm flex-grow">{article.desc}</p>
                <div className="text-main text-xl font-bold flex gap-3 items-center justify-center transition-all group-hover:text-textDark">
                  Read More <ArrowIcon className="-rotate-90" />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={changePage}
      />
    </WidthWrapper>
  );
};
