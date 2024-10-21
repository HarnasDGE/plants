import PhoneIcon from "../assets/icons/phoneThird.svg";

export const MoreAboutUs = () => {
  return (
    <div className="py-10 px-7 bg-backgroundSecond">
      <h2 className="text-3xl font-bold mb-7">More About Us</h2>
      <p className="text-xl mb-12">
        Lorem Ipsum is simply dummy text of the printingand typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown.
      </p>
      <div className="flex gap-7 items-center">
        <PhoneIcon />
        <div>
          <p className="text-2xl text-main font-bold border border-solid border-t-0 border-l-0 border-r-0 w-fit">
            +01 123456789
          </p>
          <p className="text-xl text-main">Get Free Consultancy</p>
        </div>
      </div>
    </div>
  );
};
