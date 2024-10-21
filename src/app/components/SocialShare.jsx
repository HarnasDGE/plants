import FacebookIcon from "../assets/icons/facebook.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import GoogleIcon from "../assets/icons/google.svg";
import PinterestIcon from "../assets/icons/pinterest.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";

export const SocialShare = () => {
  const socialPlatforms = [
    { icon: <FacebookIcon />, bgColor: "bg-facebook" },
    { icon: <TwitterIcon />, bgColor: "bg-twitter" },
    { icon: <GoogleIcon />, bgColor: "bg-google" },
    { icon: <PinterestIcon />, bgColor: "bg-pinterest" },
    { icon: <LinkedInIcon />, bgColor: "bg-linkedIn" },
  ];

  return (
    <div className="flex items-center gap-4">
      <p className="uppercase text-xl font-bold">Share:</p>
      {socialPlatforms.map((platform, index) => (
        <div
          key={index}
          className={`text-textLight p-2 rounded-full ${platform.bgColor} w-12 h-12 flex items-center justify-center`}
        >
          {platform.icon}
        </div>
      ))}
    </div>
  );
};
