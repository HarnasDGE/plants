import Link from "next/link";
import { WidthWrapper } from "./WidthWrapper";
import Arrow from "../assets/icons/arrowSecond.svg";
import { socialsIcons } from "../constans/socialsIcons";
import { socialsLinks } from "../constans/socialsLinks";
import { Cta } from "./Cta";

export const Footer = () => {
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about-us",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Project",
      url: "/project",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "FAQ",
      url: "/faq",
    },
    {
      name: "Contact Us",
      url: "/contact-us",
    },
    {
      name: "Thank You",
      url: "/thank-you",
    },
  ];
  const services = [
    {
      name: "Tree Planting",
      url: "/services/tree-planting",
    },
    {
      name: "Grass Cutting",
      url: "/services/grass-cutting",
    },
    {
      name: "Pests, Weeds Control",
      url: "/services/pests-weeds-control",
    },
    {
      name: "Project",
      url: "/project",
    },
  ];

  return (
    <div className="relative w-full bg-second text-textLight ">
      <div className="w-full  -translate-y-1/2 ">
        <Cta />
      </div>
      <WidthWrapper className=" px-10 ">
        <div className="w-full flex flex-col lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-4 gap-7">
          <div className="col-span-1 min-w-0">
            <h3 className="text-2xl font-bold capitalize mb-4 xl:mb-20">
              Subscribe To Newsletter
            </h3>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                adipiscing erat eget risus sollicitudin pellentes queet non
                erat. Maecenas nibh dolor.
              </p>
              <form className="border border-solid border-t-0 border-l-0 border-r-0 mt-10 flex justify-between py-1">
                <input
                  type="text"
                  placeholder="Email..."
                  className="bg-transparent border-none "
                />
                <button className="font-bold">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-span-1 min-w-0">
            <h3 className="text-2xl font-bold capitalize mb-4 xl:mb-20 ">
              Contacts
            </h3>
            <div className="flex flex-col gap-2">
              <p className="mt-0">27 Division St, New York, NY 10002, USA</p>
              <div className="flex flex-col">
                <p className="my-0 py-0">+01 1123456789</p>
                <p className="my-0 py-0">+01 1123456789</p>
              </div>
              <p>Solarpenal@gmail.Com</p>
            </div>
          </div>
          <div className="col-span-1 min-w-0">
            <h3 className="text-2xl font-bold capitalize mb-4 xl:mb-20">
              Useful Links
            </h3>
            <ul className="grid grid-cols-2 gap-2 w-fit">
              {links.map((link) => (
                <li key={link.name} className="flex gap-1 items-center">
                  <Arrow className="rotate-180 scale-[40%]" />
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-fit col-span-1 min-w-0 ">
            <h3 className="text-2xl font-bold capitalize mb-4 xl:mb-20 ">
              Popular Services
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.url}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="flex gap-7 items-center pt-7">
          {socialsLinks.map((social) => (
            <li
              key={social.name}
              className="p-2 flex items-center justify-center rounded-full border border-solid first:bg-background first:text-second"
            >
              {socialsIcons[social.name]}
            </li>
          ))}
        </ul>
      </WidthWrapper>
      <div className="w-full h-[1px] bg-footerDivider mt-10" />
      <WidthWrapper>
        <div className="w-3/4 mx-auto flex flex-col justify-between items-center items-center py-7 text-center xl:text-left">
          <p>© Copyright Plants 2024. All right reserved.</p>
          <ul className="flex gap-7">
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Sitemap</Link>
            </li>
            <li>
              <Link href="/">Terms of Use</Link>
            </li>
          </ul>
        </div>
      </WidthWrapper>
    </div>
  );
};
