import { SmallHero } from "@/app/components/SmallHero";
import { TITLE_WEBSITE } from "@/app/constans/mainInfo";
import { Input } from "../components/standardComponents/Input";
import { Textarea } from "../components/standardComponents/Textarea";
import { Button } from "../components/Button";
import { GridWrapper } from "../components/GridWrapper";
import { GetInTouch } from "../components/GetInTouch";
import { Map } from "../components/Map";
import { Sidebar } from "../components/Sidebar";

export const metadata = {
  title: `Contact Us - ${TITLE_WEBSITE}`,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book.",
};

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-[100px] ">
      <SmallHero
        title="Contact Us"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book."
      />
      <GridWrapper>
        <div className="h-fit">
          <h2>Contact Us</h2>
          <div className="h-full  flex flex-col gap-5">
            <form className="flex flex-col gap-7 h-full ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-7">
                <Input
                  type="text"
                  placeholder="Name"
                  className="w-full lg:w-1/2"
                  required
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="w-full lg:w-1/2"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full lg:w-1/2"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone no."
                  className="w-full lg:w-1/2"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </div>

              <Input
                type="text"
                placeholder="Subject"
                className="w-full"
                required
              />
              <Textarea
                className="h-full"
                placeholder="Write Message"
                required
              />
              <div className="w-full flex justify-end">
                <Button>Submit Now</Button>
              </div>
            </form>
          </div>
        </div>
        <Sidebar>
          <GetInTouch />
        </Sidebar>
      </GridWrapper>
      <Map />
    </main>
  );
}
