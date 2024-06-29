import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";
import { cn } from "@/libs/utils";
import { replaceUrlVariables } from "@/libs/variableExtractor";

function replaceUrlVariablesWithHighlight(url: string) {
  return url.replace(/{{(\s*\w+\s*)}}/g, (_match, variable) => {
    return `<span class="bg-orange-200/80 leading-[22px] rounded-sm">{{${variable.trim()}}}</span>`;
  });
}
export interface DivProps extends React.InputHTMLAttributes<HTMLDivElement> {
  url: string;
  placeholder: string;
  tooltipOpen?: boolean;
  variables: { [key: string]: string };
}

export default function UrlComponent(props: DivProps) {
  const highlightedUrl = replaceUrlVariablesWithHighlight(props.url);

  const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
  const variableUrl = isEmptyObject(props.variables)
    ? props.url
    : replaceUrlVariables(props.url, props.variables);
  return (
    <Tooltip open={props.tooltipOpen ?? false}>
      <TooltipTrigger asChild>
        <div
          contentEditable
          suppressContentEditableWarning={true}
          className={cn(
            " leading-[30px] px-3 h-8 flex w-full max-w-full items-center border-y overflow-scroll  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            props.className,
            props.url
              ? ""
              : "after:content-['https://example.com'] after:text-stone-400 focus-visible:after:hidden",
          )}
          {...props}
          dangerouslySetInnerHTML={{
            __html: highlightedUrl,
          }}
        />
      </TooltipTrigger>
      <TooltipContent
        className="w-full w-[calc(var(--radix-tooltip-trigger-width)+34px)]"
        side="bottom"
        align="start"
        sideOffset={0}
      >
        <p className="font-mono text-xs">{variableUrl}</p>
      </TooltipContent>
    </Tooltip>
  );
}
