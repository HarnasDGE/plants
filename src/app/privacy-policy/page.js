import { SmallHero } from "@/app/components/SmallHero";
import { TITLE_WEBSITE } from "@/app/constans/mainInfo";
import { LiItem } from "../components/LiItem";
import { H2 } from "../components/standardComponents/H2";
import { P } from "../components/standardComponents/P";
import { WidthWrapper } from "../components/WidthWrapper";

export const metadata = {
  title: `Privacy Policy - ${TITLE_WEBSITE}`,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book.",
};

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-[100px] ">
      <SmallHero
        title="Privacy Policy"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book."
      />
      <WidthWrapper className="flex flex-col gap-5">
        <H2>Privacy policy</H2>
        <P className="font-bold">Updated Sep18, 2021</P>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi
          elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.
        </P>
        <H2>Information We Collect</H2>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
        </P>
        <ul className="flex flex-col gap-4">
          <LiItem>Directly by you</LiItem>
          <LiItem>By your internet service provider;</LiItem>
          <LiItem>Ad networks</LiItem>
          <LiItem>Analytics providers</LiItem>
          <LiItem>Directly by you</LiItem>
        </ul>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi
          elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien,
        </P>
        <H2>Use of Personal Information</H2>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
        </P>
        <ul className="flex flex-col gap-4">
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
            erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis
            accumsan ipsum.
          </LiItem>
        </ul>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi
          elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien,
        </P>
        <H2>Aggregated Data</H2>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi
          elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
        </P>
        <H2>Your Consent</H2>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
        </P>
        <H2>Security</H2>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          scelerisque dolor tristique dolor vitae tincidunt. Aenean quis massa
          uada mi elementum elementum. Nec sapien convallis vulputate rhoncus
          vel dui.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
        </P>
        <H2>Third Party Services</H2>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi
          elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
        </P>
        <H2>Commitment</H2>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi
          elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          adipiscing erat eget risus sollicitudin pellentesque et non erat.
          Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum.
          Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.
        </P>
      </WidthWrapper>
    </main>
  );
}
