"use client";

import { useAuth } from "@clerk/nextjs";
import { Button, buttonVariants } from "@/components/Button";
import { Input } from "@/components/Input";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const TopNavigation = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const segment = useSelectedLayoutSegment();

  if (!isLoaded || !userId) {
    return (
      <nav className="p-2 border-r bg-stone-100 w-full justify-between flex items-center text-stone-100 border-b sticky top-0 z-10">
        <div className="flex gap-2 items-center">
          <Link
            className="font-mono px-2 w-fit h-[24px] bg-[#0300E0] rounded-md text-xs flex items-center justify-center text-stone-100 mr-6"
            href="/"
          >
            .make
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-xs relative",
              "bg-stone-200 hover:bg-stone-200 text-stone-950",
            )}
            href="queries"
          >
            Queries
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-xs relative",
            )}
            href="apps"
          >
            Apps
          </Link>
        </div>
        <Input
          className="max-w-[200px] mr-4 absolute left-[50%] translate-x-[-50%]"
          placeholder="search..."
        />
        <SignedOut>
          <SignInButton children={<Button>Sign in</Button>} />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    );
  }

  return (
    <nav className="p-2 border-r bg-stone-100 w-full justify-between flex items-center text-stone-100 border-b sticky top-0 z-10">
      <div className="flex gap-2 items-center">
        <Link
          className="font-mono px-2 w-fit h-[24px] bg-[#0300E0] rounded-md text-xs flex items-center justify-center text-stone-100 mr-6"
          href="/"
        >
          .make
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "text-xs relative",
            `${segment === "queries" && "bg-stone-200 hover:bg-stone-200 text-stone-950"}`,
          )}
          href="queries"
        >
          Queries
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "text-xs relative",
            `${segment === "apps" && "bg-stone-200 hover:bg-stone-200 text-stone-950"}`,
          )}
          href="apps"
        >
          Apps
        </Link>
      </div>
      <Input
        className="max-w-[200px] mr-4 absolute left-[50%] translate-x-[-50%]"
        placeholder="search..."
      />
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default TopNavigation;
