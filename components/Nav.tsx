import { User } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export const Nav = () => {
  return (
    <div className="w-full flex justify-between text-center pt-5 ">
      <ModeToggle />
      <User />
    </div>
  );
}