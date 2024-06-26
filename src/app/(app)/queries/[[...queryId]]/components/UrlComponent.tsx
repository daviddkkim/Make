import { cn } from "@/libs/utils";
import { extractVariables } from "@/libs/variableExtractor";
import { useState } from "react";

function replaceUrlVariablesWithHighlight(url: string) {
    return url.replace(/{{(\w+)}}/g, (match) => {
        return (
            `<span class="bg-indigo-200">${match}</span>`
        )
    });
}

export interface DivProps
    extends React.InputHTMLAttributes<HTMLDivElement> {
    url: string,
    placeholder: string
}

export default function UrlComponent(props: DivProps) {

    const variables = extractVariables(props.url);
    const highlightedUrl = replaceUrlVariablesWithHighlight(props.url)
    console.log(highlightedUrl)
    return (
        <div contentEditable suppressContentEditableWarning={true}
            className={cn(" leading-[30px] px-3 h-8 flex w-full max-w-full items-center border rounded-md overflow-scroll  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                props.url ? "" : "after:content-['https://example.com'] after:text-stone-400 focus-visible:after:hidden"
            )}
            {...props}
            dangerouslySetInnerHTML={{
                __html: highlightedUrl
            }}>
        </div>
    )
}