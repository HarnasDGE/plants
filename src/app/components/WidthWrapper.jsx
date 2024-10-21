export const WidthWrapper = ({ children, className = "" }) => {
  return (
    <div className={`max-w-maxWidth w-full mx-auto px-5 ${className}`}>
      {children}
    </div>
  );
};
