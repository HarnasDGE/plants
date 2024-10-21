export const RoundedInfo = ({ count, title }) => {
  return (
    <div className="flex gap-3 items-center pl-2 pr-5 bg-custom-gradient3 xl:bg-none rounded-full">
      <div className="h-12 w-12 flex items-center justify-center p-2 rounded-full font-bold  xl:bg-custom-gradient2   ">
        {count}
      </div>

      <div className="max-w-28 font-normal xl:font-bold whitespace-nowrap xl:whitespace-normal">
        {title}
      </div>
    </div>
  );
};
