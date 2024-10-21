import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialsIcons } from "../constans/socialsIcons";

export const AuthorInfo = ({ author }) => {
  return (
    <div className="bg-authorBg p-5 flex flex-col gap-4">
      <Image
        src={author.avatar}
        alt={`${author.nickname}'s avatar`}
        className="rounded-xl"
        width={70}
        height={70}
      />
      <div className="author-details">
        <h4>{author.nickname}</h4>
        <p className="text-textMedium">{author.description}</p>
        <div className="author-social-media flex gap-3 text-textMedium">
          {author.socialMedia.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialsIcons[social.platform] || social.platform}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
