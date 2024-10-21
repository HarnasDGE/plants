import { GridWrapper } from "@/app/components/GridWrapper";
import { Post } from "@/app/components/Post";
import { Sidebar } from "@/app/components/Sidebar";
import { SmallHero } from "@/app/components/SmallHero";
import { TITLE_WEBSITE } from "@/app/constans/mainInfo";
import { postsDb } from "@/app/data/postsDb";

export const metadata = {
  title: `Blog Details - ${TITLE_WEBSITE}`,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book.",
};

export default function Home({ params }) {
  const { id } = params;

  const postData = postsDb.find((post) => post.id.toString() === id);

  if (!postData) {
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
          <Post postData={postData} />
        </div>
        <Sidebar></Sidebar>
      </GridWrapper>
    </main>
  );
}
