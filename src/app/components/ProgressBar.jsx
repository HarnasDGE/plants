export const ProgressBar = ({ procent, title }) => {
  return (
    <div className="w-full font-bold py-2">
      <div className="flex justify-between" style={{ width: `${procent}%` }}>
        <h4>{title}</h4>
        <p>{procent}%</p>
      </div>
      <div className="w-full h-5 mt-2 shadow-progressBar py-[1px] px-1 rounded-full flex justify-start">
        <div
          className="h-full rounded-full bg-main"
          style={{ width: `${procent}%` }}
        ></div>
      </div>
    </div>
  );
};
