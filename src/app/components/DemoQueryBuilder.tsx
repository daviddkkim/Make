"use client";

import { Panel, PanelResizeHandle } from "react-resizable-panels";
import DemoQueryClient from "./DemoQueryClient";
import { useState } from "react";
import { extractVariables } from "@/libs/variableExtractor";
import { Label } from "@/components/Label";
import { Input } from "@/components/Input";
import { InfoIcon } from "lucide-react";
import { TooltipProvider } from "@/components/Tooltip";

export default function DemoQueryBuilder({}: {}) {
  const [url, setUrl] = useState("");
  const [inputValues, setInputValues] = useState({});
  const [urlTooltipOpen, setUrlTooltipOpen] = useState(false);
  function onChangeHandler(e: any) {
    setUrl(e.currentTarget.innerText);
    setUrlTooltipOpen(false);
  }

  const variables = extractVariables(url ? url : "");
  return (
    <TooltipProvider>
      <Panel key={3} defaultSize={55}>
        <div style={{ overflow: "auto" }} className="h-full">
          <DemoQueryClient
            activeQuery={{}}
            onUrlChange={onChangeHandler}
            variables={inputValues}
            onUrlInputFocus={() => setUrlTooltipOpen(true)}
            urlTooltipOpen={urlTooltipOpen}
          />
        </div>
      </Panel>
      <PanelResizeHandle className="w-[1px] bg-stone-200" key={4} />
      <Panel key={5} defaultSize={25}>
        <div className="px-4 py-3">
          {variables.length > 0 ? (
            <div className="flex flex-col gap-2">
              <h2 className="font-normal text-base text-stone-700">
                Variables
              </h2>
              {variables.map((variable) => {
                return (
                  <>
                    <Label className="flex flex-col gap-1" htmlFor={variable}>
                      {variable}
                    </Label>
                    <Input
                      id={variable}
                      type="text"
                      key={variable}
                      onFocus={() => setUrlTooltipOpen(true)}
                      onBlur={() => setUrlTooltipOpen(false)}
                      onChange={(e) => {
                        setInputValues({
                          ...inputValues,
                          [variable]: e.currentTarget.value,
                        });
                      }}
                    />
                  </>
                );
              })}
            </div>
          ) : (
            <div className="font-mono  flex ">
              <InfoIcon
                className="flex-shrink-0 mr-2 mt-[1px] text-stone-500"
                size={14}
              />
              <span className="flex-grow text-stone-500 text-xs">
                {
                  "This query has no variables. Use {{ variableName }} to add variables to the URL."
                }
              </span>
            </div>
          )}
        </div>
      </Panel>
    </TooltipProvider>
  );
}
