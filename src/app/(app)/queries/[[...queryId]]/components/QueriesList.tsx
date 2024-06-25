"use client";

import { Button, buttonVariants } from "@/components/Button";
import { supabaseClient } from "@/libs/supabase/client";
import { cn } from "@/libs/utils";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function QueriesList({
  queries,
  activeQuery,
}: {
  queries: {
    name: string;
    id: string;
  }[];
  activeQuery?: {
    name: string;
    id: string;
  };
}) {
  const router = useRouter();

  async function createNewQuery() {
    try {
      const { data } = await supabaseClient
        .from("api_queries")
        .insert({})
        .select();
      if (data) {
        router.push(data[0].id.toString());
      } else {
        // dont think this is necessary.
        router.refresh();
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  }

  return (
    <div className="flex flex-col">
      <div className="px-4 pt-4 pb-2">
        <Button className="w-full" onClick={createNewQuery}>
          <PlusIcon size={16} className="text-stone-50 mr-1 flex-none" />
          <span className="truncate"> New query</span>
        </Button>
      </div>
      {queries.length > 0 &&
        queries.map((item) => {
          return (
            <Link
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-sm relative justify-start rounded-none px-4",
                `${activeQuery?.id === item.id && "bg-stone-200 hover:bg-stone-200 text-stone-950"}`,
              )}
              href={`/queries/${item.id.toString()}`}
              key={item.id}
            >
              {item.name}
            </Link>
          );
        })}
    </div>
  );
}
