"use client";
import { WidthWrapper } from "./WidthWrapper";
import ReviewerImage from "../assets/reviewerUnknown.png";
import Image from "next/image";

import { faqData } from "../constans/faqData";
import { FaqQuestion } from "./FaqQuestion";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { H2 } from "./standardComponents/H2";
import { Color } from "./Color";
export const Faq = ({
  desc = true,
  defaultCategory = "tree-planting",
  displayImage = true,
}) => {
  const searchParams = useSearchParams();
  const [isOpenIndex, setIsOpenIndex] = useState(0);
  const category = searchParams.get("category");
  const questions = faqData.filter(
    (qa) => (!category && qa.param === defaultCategory) || qa.param === category
  );
  return (
    <WidthWrapper>
      <div className="flex gap-2">
        <div className="w-full">
          <h2 className="text-center xl:text-left">
            Frequently<Color> Asked Questions </Color>
          </h2>
          {desc && (
            <p className="mb-10 text-center xl:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown of type and scrambled it to
              make a type specimen book.
            </p>
          )}
          <div className="flex flex-col gap-7">
            {questions.map((qa, index) => (
              <FaqQuestion
                key={qa.id}
                qa={qa}
                counter={index + 1}
                open={isOpenIndex === index}
                onClick={() => setIsOpenIndex(index)}
              />
            ))}
          </div>
        </div>
        {displayImage && (
          <div className="w-1/2 flex justify-center hidden xl:flex">
            <Image
              src={ReviewerImage}
              height="200"
              width="500"
              alt="Faq section image decoration"
            />
          </div>
        )}
      </div>
    </WidthWrapper>
  );
};
