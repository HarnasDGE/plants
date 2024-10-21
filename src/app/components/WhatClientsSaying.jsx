"use client";
import { WidthWrapper } from "./WidthWrapper";
import ArrowIcon from "../assets/icons/arrowSecond.svg";

import { Button } from "./Button";
import { Color } from "./Color";
import { useEffect, useRef, useState } from "react";
import { CarouselMobile } from "./CarouselMobile"; // Importujemy CarouselMobile
import { ReviewCard } from "./ReviewCard";
import { reviews } from "../data/reviews/reviews";

export const WhatClientsSaying = () => {
  const [translateValue, setTranslateValue] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2); // Domyślnie 2 elementy
  const [windowWidth, setWindowWidth] = useState(0); // Nowy stan dla szerokości okna

  useEffect(() => {
    const updateWidthAndItems = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setWindowWidth(window.innerWidth);

        // Ustawienie liczby widocznych elementów na podstawie szerokości okna
        if (window.innerWidth < 1024) {
          // Poniżej breakpointu 'lg'
          setVisibleItems(1);
        } else {
          setVisibleItems(2);
        }
      }
    };

    updateWidthAndItems();

    window.addEventListener("resize", updateWidthAndItems);

    return () => {
      window.removeEventListener("resize", updateWidthAndItems);
    };
  }, []);

  // Resetujemy translateValue przy zmianie szerokości okna
  useEffect(() => {
    setTranslateValue(0);
  }, [windowWidth]);

  const handleClickNext = () => {
    setTranslateValue((prevState) => {
      const pages = Math.ceil(reviews.length / visibleItems) - 1;
      const maxTranslate = -pages * (containerWidth + 32); // 32 to gap między elementami
      const newTranslateValue = prevState - (containerWidth + 32);

      if (newTranslateValue < maxTranslate) {
        return maxTranslate;
      }

      return newTranslateValue;
    });
  };

  const handleClickPrev = () => {
    setTranslateValue((prevState) => {
      const newTranslateValue = prevState + (containerWidth + 32);

      if (newTranslateValue > 0) {
        return 0;
      }

      return newTranslateValue;
    });
  };

  return (
    <div className="bg-review-background-gradient py-24">
      <WidthWrapper className="text-center lg:text-left">
        <div ref={containerRef}>
          <h2>
            What <Color>Clients Saying</Color>
          </h2>
          <div className="w-full flex justify-between mt-8 mb-12">
            <p className="w-full lg:w-3/4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
            <div className="h-fit gap-2 hidden lg:inline-flex">
              <Button color="second" type="icon" onClick={handleClickPrev}>
                <ArrowIcon />
              </Button>
              <Button type="icon" onClick={handleClickNext}>
                <ArrowIcon className="rotate-180" />
              </Button>
            </div>
          </div>
          <CarouselMobile>
            {reviews.map((review) => (
              <div
                key={review.id}
                className="pt-9 px-7 mb-10 bg-background shadow-normal"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </CarouselMobile>
          <div className="overflow-hidden hidden lg:block">
            <ul
              className="flex gap-8"
              style={{
                transform: `translateX(${translateValue}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="bg-background min-w-[100%] md:min-w-[49%] pt-9 px-7 shadow-review mb-10 shadow-normal"
                >
                  <ReviewCard review={review} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
};
