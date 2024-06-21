"use client";
import { buttonVariants } from "@/components/Button";
import { Input } from "@/components/Input";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const TopNavigation = () => {
  const segment = useSelectedLayoutSegment();

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
      <Input className="max-w-[200px]" />
    </nav>
  );
};

export default TopNavigation;
