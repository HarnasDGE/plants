"use client";
import { WidthWrapper } from "./WidthWrapper";
import { CarouselMobile } from "./CarouselMobile";
import { Button } from "./Button"; // Zakładam, że masz komponent Button
import { ArticleCard } from "./ArticleCard";
import { postsDb } from "../data/postsDb";

export const InsightsAndArticles = () => {
  return (
    <WidthWrapper>
      <h2 className="text-4xl font-extrabold text-center">
        Our <span className="text-main">Insights & Articles</span>
      </h2>
      <p className="w-3/4 my-5 text-center mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took of type and scrambled it
        to make a type specimen book.
      </p>

      {/* Wyświetlanie na urządzeniach mobilnych */}
      <CarouselMobile>
        {postsDb.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            isLargeScreen={false}
          />
        ))}
      </CarouselMobile>

      {/* Wyświetlanie na większych ekranach */}
      <div className={`my-12 hidden lg:block`}>
        <ul className="flex gap-7 justify-center">
          {postsDb.slice(0, 3).map((article, index) => {
            return (
              <ArticleCard
                key={article.id}
                article={article}
                isLargeScreen={true}
                activePost={index === 1}
              />
            );
          })}
        </ul>
        <div className="flex justify-center mt-8">
          <Button>Discover Me</Button>
        </div>
      </div>
    </WidthWrapper>
  );
};
