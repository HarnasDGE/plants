export const Textarea = (props) => {
  const { className } = props;
  return (
    <textarea
      {...props}
      className={`w-full py-3.5 px-5 text-textMedium border border-solid border-textareaBorder rounded ${className}`}
    />
  );
};
