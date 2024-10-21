import MorrisImage from "../assets/images/banners/morris.png";
import ForestRidgeImage from "../assets/images/banners/forestRidge.png";
import AcmeGardenImage from "../assets/images/banners/acmeGarden.png";
export const Banners = () => {
  const banners = [
    MorrisImage,
    ForestRidgeImage,
    AcmeGardenImage,
    MorrisImage,
    ForestRidgeImage,
    AcmeGardenImage,
  ];
  return (
    <div className="flex flex-wrap justify-center gap-2 px-10 items-center mb-[140px] lg:[100px] xl:mb-[80px]">
      {banners.map((banner) => (
        <div
          className="bg-center bg-no-repeat bg-contain content-[''] "
          style={{
            backgroundImage: `url(${banner.src})`,
            height: "100px",
            width: "200px",
          }}
        />
      ))}
    </div>
  );
};
