import { SmallHero } from "@/app/components/SmallHero";
import { TITLE_WEBSITE } from "@/app/constans/mainInfo";
import { LiItem } from "../components/LiItem";
import { WidthWrapper } from "../components/WidthWrapper";

export const metadata = {
  title: `Terms & Condition - ${TITLE_WEBSITE}`,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book.",
};

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-[100px] ">
      <SmallHero
        title="Terms & Condition"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book."
      />
      <WidthWrapper className="flex flex-col gap-5">
        <h2>Terms and condition</h2>
        <p className="font-bold">Updated Sep18, 2021</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi
          elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
        </p>
        <h2>Personal Data that we collect about you</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi
          elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
        </p>
        <h2>Information that we collect automatically on our Sites</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
        </p>
        <ul className="flex flex-col gap-5">
          <LiItem>
            Integer adipiscing erat eget risus sollicitudin pellentesque et non
            erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis
            accumsan ipsum.
          </LiItem>
          <LiItem>
            Integer adipiscing erat eget risus sollicitudin pellentesque et non
            erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis
            accumsan ipsum.
          </LiItem>
          <LiItem>
            Integer adipiscing erat eget risus sollicitudin pellentesque et non
            erat. Maecenas nibh dolor, sagittis accumsan ipsum.
          </LiItem>
          <LiItem>
            Integer adipiscing erat eget risus sollicitudin pellentesque et non
            erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis
            accumsan ipsum.
          </LiItem>
          <LiItem>
            Integer adipiscing erat eget risus sollicitudin pellentesque et non
            erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis
            accumsan ipsum.
          </LiItem>
        </ul>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </WidthWrapper>
    </main>
  );
}
