"use client";
import { Button } from "./Button";
import { WidthWrapper } from "./WidthWrapper";

import DorisImage from "../assets/staff/doris.jpg";
import MarkImage from "../assets/staff/mark.jpg";
import LindaImage from "../assets/staff/linda.jpg";
import JamesImage from "../assets/staff/james.jpg";

import { Color } from "./Color";
import { CarouselMobile } from "./CarouselMobile";
import { Person } from "./Person";

export const TrainedStaff = () => {
  const staff = [
    {
      id: 1,
      name: "Doris Jordan",
      imageUrl: DorisImage,
      position: "Design Expert",
      socials: [
        {
          id: 1,
          name: "Google",
          url: "/",
        },
        {
          id: 2,
          name: "Facebook",
          url: "/",
        },
        {
          id: 3,
          name: "Twitter",
          url: "/",
        },
        {
          id: 4,
          name: "Pinterest",
          url: "/",
        },
        {
          id: 5,
          name: "LinkedIn",
          url: "/",
        },
      ],
    },
    {
      id: 2,
      name: "Mark Smith",
      position: "Project Manager",
      imageUrl: MarkImage,
      socials: [
        {
          id: 1,
          name: "Google",
          url: "/",
        },
        {
          id: 2,
          name: "Facebook",
          url: "/",
        },
        {
          id: 3,
          name: "Twitter",
          url: "/",
        },
        {
          id: 4,
          name: "Pinterest",
          url: "/",
        },
        {
          id: 5,
          name: "LinkedIn",
          url: "/",
        },
      ],
    },
    {
      id: 3,
      name: "Linda Johnson",
      position: "Marketing Specialist",
      imageUrl: LindaImage,
      socials: [
        {
          id: 1,
          name: "Google",
          url: "/",
        },
        {
          id: 2,
          name: "Facebook",
          url: "/",
        },
        {
          id: 3,
          name: "Twitter",
          url: "/",
        },
        {
          id: 4,
          name: "Pinterest",
          url: "/",
        },
        {
          id: 5,
          name: "LinkedIn",
          url: "/",
        },
      ],
    },
    {
      id: 4,
      name: "James Williams",
      position: "Software Developer",
      imageUrl: JamesImage,
      socials: [
        {
          id: 1,
          name: "Google",
          url: "/",
        },
        {
          id: 2,
          name: "Facebook",
          url: "/",
        },
        {
          id: 3,
          name: "Twitter",
          url: "/",
        },
        {
          id: 4,
          name: "Pinterest",
          url: "/",
        },
        {
          id: 5,
          name: "LinkedIn",
          url: "/",
        },
      ],
    },
  ];

  return (
    <WidthWrapper className="text-center lg:text-left">
      <h2>
        Our <Color>Trained Staff</Color>
      </h2>
      <div className="flex flex-col justify-between items-center mt-8 mb-12 lg:flex-row ">
        <p className="w-3/4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown of type and scrambled it to make a
          type specimen book.
        </p>
        <Button link="/trained-staff">Discover More</Button>
      </div>
      <ul className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 hidden lg:grid">
        {staff.map((person) => {
          return <Person person={person} />;
        })}
      </ul>
      <CarouselMobile>
        {staff.map((person) => (
          <Person person={person} />
        ))}
      </CarouselMobile>
    </WidthWrapper>
  );
};
