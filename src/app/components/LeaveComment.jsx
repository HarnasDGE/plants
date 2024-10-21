import { Button } from "./Button";
import { Input } from "./standardComponents/Input";
import { Textarea } from "./standardComponents/Textarea";

export const LeaveComment = () => {
  return (
    <form className="flex flex-col gap-5 text-md">
      <h2>Leave A Comment</h2>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <Textarea placeholder="Write Massage" />
      <Button>Post Comment</Button>
    </form>
  );
};
