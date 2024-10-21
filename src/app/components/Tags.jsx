import { postsDb } from "../data/postsDb";
import { Button } from "./Button";

export const Tags = () => {
  // Tworzymy nowy Set, aby mieć unikalne tagi
  const tags = [...new Set(postsDb.flatMap((post) => post.tags))].slice(0, 10);

  console.log(`tags: `, tags);
  return (
    <div className="py-10 px-7 shadow-normal">
      <h3>Tags</h3>
      <div className="flex flex-wrap gap-4">
        {tags.map((tag, index) => (
          <Button key={index} color="third">
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
};
