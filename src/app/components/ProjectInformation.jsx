export const ProjectInformation = ({ project }) => {
  return (
    <div className="rounded py-10 px-7 shadow-normal">
      <div>
        <h2 className="text-3xl font-bold">Project Information</h2>
        <p className="text-xl ">
          Pleasure and praising pain was born and I will give you a complete
          account of the systems and the actually teachings of the great
          explorer.
        </p>
      </div>
      <div className="flex flex-col gap-7 mt-7">
        <div className="pb-2 border border-solid border-t-0 border-l-0 border-r-0 ">
          <h3 className="text-xl font-bold">Client</h3>
          <p className="text-sm">{project.client}</p>
        </div>
        <div className="pb-2 border border-solid border-t-0 border-l-0 border-r-0 ">
          <h3 className="text-xl font-bold">Location</h3>
          <p className="text-sm">{project.location}</p>
        </div>
        <div className="pb-2 border border-solid border-t-0 border-l-0 border-r-0 ">
          <h3 className="text-xl font-bold">Contruction Date</h3>
          <p className="text-sm">05 Oct 2021</p>
        </div>
        <div className="pb-2 border border-solid border-t-0 border-l-0 border-r-0 ">
          <h3 className="text-xl font-bold">Completed Date</h3>
          <p className="text-sm">05 Oct 2021</p>
        </div>
        <div className="pb-2 border border-solid border-t-0 border-l-0 border-r-0 ">
          <h3 className="text-xl font-bold">Price After Completion</h3>
          <p className="text-sm">{project.price}$</p>
        </div>
      </div>
    </div>
  );
};
