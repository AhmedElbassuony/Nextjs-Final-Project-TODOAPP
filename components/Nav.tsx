import { User } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export const Nav = () => {
  return (
    <div className="w-full flex justify-between text-center pt-5 ">
      <ModeToggle />
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}