import DefaultReviewerImage from "../assets/reviewerUnknown.png";
import StarIcon from "../assets/icons/star.svg";

export const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col shadow-normal lg:shadow-none p-8">
      <div className="flex justify-left z-0">
        <div
          className=" bg-contain bg-center bg-bottom bg-no-repeat drop-shadow-lg	"
          style={{
            backgroundImage: `url(${
              review.imageUrl || DefaultReviewerImage.src
            })`,
            width: "40%",
            aspectRatio: "1/1",
          }}
        />
      </div>

      <div className="py-6 flex flex-col text-left">
        <p className="flex-1">{review.review}</p>
        <div className="pt-7 flex justify-between ">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">{review.name}</h3>
            <p className="text-base">{review.position}</p>
          </div>
          <div className="flex gap-1 items-center">
            {Array.from({ length: review.stars }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
