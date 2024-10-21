import DownloadIcon from "../assets/icons/download.svg";
import Link from "next/link";

export const Button = ({
  children,
  onClick,
  type = "default",
  color = "default",
  border = true,
  bold = true,
  link, // Dodany prop 'link'
  className,
}) => {
  const buttonColor = {
    default:
      "text-textLight bg-main border border-solid border-main fill-current transition-all hover:bg-transparent hover:text-main",
    second:
      "text-main bg-background border border-solid border-main fill-current transition-all hover:bg-main hover:text-textLight",
    third:
      "text-textDark bg-backgroundSecond border border-solid border-backgroundSecond fill-current transition-all hover:bg-main hover:text-textLight",
    noneLight:
      "text-textLight bg-none border-none fill-current transition-all hover:text-textMedium",
    noneDark:
      "text-textDark bg-none border-none fill-current transition-all hover:text-main",
    white:
      "text-textDark bg-background transition-all hover:bg-main hover:text-textLight",
  };

  const buttonTypes = {
    default:
      "py-1.5 w-fit px-6 inline-flex items-center justify-center text-base font-bold gap-2.5 rounded",
    wide: "py-3 px-8 inline-flex items-center justify-center gap-2.5 text-base font-bold rounded",
    narrow:
      "py-0.25 px-3.5 inline-flex items-center justify-center gap-2.5 text-base rounded",
    fullWidth:
      "py-3 w-full inline-flex items-center justify-center text-base font-bold leading-5 capitalize gap-2.5 rounded",
    fullWidthLeft:
      "py-3 px-3.5 w-full inline-flex items-center justify-start text-base font-bold leading-5 capitalize gap-2.5 rounded",
    list: "py-3 px-5 w-full inline-flex items-center justify-between text-base font-bold capitalize rounded",
    download:
      "py-3 px-5 w-full inline-flex items-center justify-between text-base font-bold capitalize rounded",
    icon: "p-2.5 rounded",
  };

  const classes = `${buttonTypes[type]} ${buttonColor[color]} ${
    border ? "" : "border-none"
  } ${bold ? "font-bold" : "font-normal"} ${className}`;

  // Sprawdzamy, czy link jest zewnętrzny
  const isExternalLink = link && /^https?:\/\//.test(link);

  const content =
    type === "download" ? (
      <>
        <div className="inline-flex items-center gap-2.5">{children}</div>
        <DownloadIcon />
      </>
    ) : (
      <>{children}</>
    );

  if (link) {
    // Jeśli link jest zewnętrzny
    if (isExternalLink) {
      return (
        <Link
          href={link}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </Link>
      );
    } else {
      // Jeśli link jest wewnętrzny (Next.js)
      return (
        <Link href={link} className={classes}>
          {content}
        </Link>
      );
    }
  }

  // Jeśli nie ma linku, renderujemy standardowy przycisk
  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};
