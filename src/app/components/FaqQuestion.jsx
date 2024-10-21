import { Button } from "./Button";
import PlusIcon from "../assets/icons/plus.svg";
export const FaqQuestion = ({ counter, qa, open = false, onClick }) => {
  return (
    <div className="transition-all">
      <Button
        type="list"
        color={`${open ? "default" : "third"}`}
        onClick={onClick}
      >
        <p>
          {counter}. {qa.question}
        </p>{" "}
        {open ? <PlusIcon className="rotate-45" /> : <PlusIcon />}
      </Button>
      {open && <p className="px-7 mt-5 transition-all">{qa.answer}</p>}
    </div>
  );
};
