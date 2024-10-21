export const CustomGradientDiv = ({ children, className }) => {
  return (
    <div
      className={`relative h-[430px] w-full bg-gray-50 z-0 overflow-hidden ${className}`}
    >
      <div className="absolute top-20 left-20 bg-main w-[300px] h-[300px] blur-[270px] z-10"></div>
      <div className="absolute bottom-0 left-[30%] bg-ctaLight w-[300px] h-[300px] blur-[220px] z-10 opacity-90"></div>
      <div className="absolute top-20 right-[10%] bg-main w-[400px] h-[400px] blur-[300px] z-10"></div>
      {children}
    </div>
  );
};
