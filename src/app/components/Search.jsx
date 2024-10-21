import MagniefierIcon from "../assets/icons/magniefier.svg";

export const Search = ({ className, title = null }) => {
  return (
    <div className="w-full max-w-[500px]">
      {title && <h3>{title}</h3>}
      <form
        className={`relative rounded border border-solid border-inputSearchBorder ${className} shadow-normal`}
      >
        <input
          type="text"
          placeholder="Search here..."
          className="py-3 px-4  text-textMedium font-base font-normal leading-7 "
        ></input>{" "}
        <button className="absolute top--1/2 right-3 translate-y-1/2 text-main">
          <MagniefierIcon />
        </button>
      </form>
    </div>
  );
};
