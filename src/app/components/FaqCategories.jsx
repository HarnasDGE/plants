"use client";
import { Button } from "./Button";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { faqData } from "../constans/faqData";
export const FaqCategories = () => {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const categories = faqData.map((qa) => ({
    name: qa.category,
    param: qa.param,
  }));
  const categoriesNoRepeat = Array.from(
    new Map(categories.map((item) => [item.param, item])).values()
  );
  return (
    <div className="py-10 px-7 shadow-normal">
      <h2 className="text-3xl font-bold mb-7">Categories</h2>
      <ul className="flex flex-col gap-5">
        {categoriesNoRepeat.map((category) => (
          <li key={category.name}>
            <Link href={`/faq?category=${category.param}`}>
              <Button
                type="list"
                color={`${
                  category.param === categoryParam ? "default" : "third"
                }`}
              >
                {category.name}
                {category.param === categoryParam ? (
                  <MinusIcon />
                ) : (
                  <PlusIcon />
                )}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
