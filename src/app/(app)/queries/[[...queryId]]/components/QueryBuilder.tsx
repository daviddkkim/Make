"use client";

import { Panel, PanelResizeHandle } from "react-resizable-panels";
import QueryClient from "./QueryClient";
import { useState } from "react";
import { extractVariables } from "@/libs/variableExtractor";
import { Label } from "@/components/Label";
import { Input } from "@/components/Input";
import { InfoIcon } from "lucide-react";

export default function QueryBuilder({
  activeQuery = {
    id: null,
    name: "",
    method: "get",
  },
}: {
  activeQuery?: {
    id?: number | null;
    organization_id?: string;
    created_by_user_id?: string;
    name?: string;
    description?: string;
    method?: "get" | "post" | "put" | "patch" | "delete";
    url?: string;
  };
}) {
  const [url, setUrl] = useState(activeQuery.url);
  const [inputValues, setInputValues] = useState({});
  function onChangeHandler(e: any) {
    setUrl(e.currentTarget.innerText);
  }

  const variables = extractVariables(url ? url : "");
  return (
    <>
      <Panel className="px-4 py-2" key={3} defaultSize={55}>
        <div style={{ overflow: "auto" }} className="h-full">
          <QueryClient
            activeQuery={activeQuery}
            onUrlChange={onChangeHandler}
            variables={inputValues}
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
                className="flex-shrink-0 mr-2 mt-[2px] text-stone-500"
                size={16}
              />
              <span className="flex-grow text-stone-700">
                {
                  "This query has no variables. Use {{ variableName }} to add variables to the URL."
                }
              </span>
            </div>
          )}
        </div>
      </Panel>
    </>
  );
}
