import { Textarea } from "./standardComponents/Textarea";
import { Button } from "./Button";
import { Input } from "./standardComponents/Input";

export const AskYourQuestion = () => {
  return (
    <div>
      <h2 className="text-4xl font-extrabold">Ask Your Question</h2>
      <div className="h-full">
        <form className="flex flex-col gap-7 h-full">
          <div className="grid grid-cold-1 lg:grid-cols-2  gap-7 mt-7">
            <Input type="text" placeholder="Name" className="w-1/2" required />
            <Input
              type="text"
              placeholder="Last Name"
              className="w-1/2"
              required
            />
          </div>
          <Textarea
            className="h-full min-h-[300px]"
            placeholder="Write Message"
            required
          />
          <div className="w-full flex justify-start">
            <Button>Submit A Question</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
