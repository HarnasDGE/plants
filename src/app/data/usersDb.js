import UserImage from "../assets/images/user.jpg";

export const usersDb = [
  {
    id: 0,
    nickname: "Admin",
    avatar: UserImage.src,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book.",
    socialMedia: [
      { platform: "Facebook", link: "#" },
      { platform: "Twitter", link: "#" },
      { platform: "Instagram", link: "#" },
    ],
  },
  {
    id: 1,
    nickname: "Damian",
    avatar: UserImage.src,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled it to make a type specimen book.",
    socialMedia: [
      { platform: "Facebook", link: "#" },
      { platform: "Pinterest", link: "#" },
      { platform: "LinkedIn", link: "#" },
      { platform: "Google", link: "#" },
    ],
  },
];
