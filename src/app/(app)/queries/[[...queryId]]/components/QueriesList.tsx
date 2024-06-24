import { buttonVariants } from "@/components/Button";
import { cn } from "@/libs/utils";
import Link from "next/link";
export default function QueriesList({
    queries,
    activeQuery
}: {
    queries: {
        name: string,
        id: string,
    }[],
    activeQuery?: {
        name: string,
        id: string
    }
}) {

    return (
        <div className="flex flex-col">
            {queries.length > 0 && queries.map((item) => {
                return (
                    <Link
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "text-sm relative justify-start rounded-none",
                            `${activeQuery?.id === item.id && "bg-stone-200 hover:bg-stone-200 text-stone-950"}`,

                        )}

                        href={`/queries/${item.id.toString()}`}
                        id={item.id}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </div>
    )
}