import PdfIcon from "../assets/icons/pdf.svg";
import Pdf2Icon from "../assets/icons/pdfDownload.svg";
import { Button } from "./Button";

export const Brochure = () => {
  return (
    <div className="py-10 px-7 shadow-normal">
      <h2 className="text-3xl font-bold mb-5">Brochure</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printingand typesetting
        industry. Lorem Ipsum has been the industry.
      </p>
      <div className="flex flex-col gap-7 mb-7">
        <h3 className=" text-2xl font-bold"></h3>
        <Button type="download">
          <Pdf2Icon />
          Info Company
        </Button>
        <Button type="download" color="third">
          <PdfIcon />
          Brochure Newest
        </Button>
      </div>
      <Button>Get A Qoute</Button>
    </div>
  );
};
