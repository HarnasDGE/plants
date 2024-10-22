import { Brochure } from "@/app/components/Brochure";
import { GridWrapper } from "@/app/components/GridWrapper";
import { MoreAboutUs } from "@/app/components/MoreAboutUs";
import { Post } from "@/app/components/Post";
import { RecentPosts } from "@/app/components/RecentPosts";
import { Search } from "@/app/components/Search";
import { ServicesList } from "@/app/components/ServicesList";
import { Sidebar } from "@/app/components/Sidebar";
import { SmallHero } from "@/app/components/SmallHero";
import { Tags } from "@/app/components/Tags";
import { TITLE_WEBSITE } from "@/app/constans/mainInfo";
import { postsDb } from "@/app/data/postsDb";

export const metadata = {
  title: `Blog Details - ${TITLE_WEBSITE}`,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book.",
};

export default function Home({ article }) {
  if (!article) {
    return <div>Nie ma takiego wpisu</div>;
  }
  return (
    <main className="w-full flex flex-col gap-[100px] ">
      <SmallHero
        title="Blog Details"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book."
      />
      <GridWrapper>
        <div>
          <Post article={article} />
        </div>
        <Sidebar>
          <Search title="Search" />
          <RecentPosts />
          <ServicesList />
          <Tags />
          <Brochure />
          <MoreAboutUs />
        </Sidebar>
      </GridWrapper>
    </main>
  );
}

export async function generateStaticParams() {
  return postsDb.map((post) => ({
    postId: post.id.toString(),
  }));
}
export const dynamicParams = true; // Pozwól generować ścieżki dynamicznie na bieżąco
export const dynamic = "force-dynamic";
