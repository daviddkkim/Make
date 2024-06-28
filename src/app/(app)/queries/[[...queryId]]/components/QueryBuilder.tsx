"use client";

import { Panel, PanelResizeHandle } from "react-resizable-panels";
import QueryClient from "./QueryClient";
import { useState } from "react";
import { extractVariables } from "@/libs/variableExtractor";
import { Label } from "@/components/Label";
import { Input } from "@/components/Input";

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
          />
        </div>
      </Panel>
      <PanelResizeHandle className="w-[1px] bg-stone-200" key={4} />
      <Panel key={5} defaultSize={25}>
        <div className="px-4 py-3">
          {variables ? (
            <div className="flex flex-col gap-2">
              <h2 className="font-normal text-base text-stone-700">
                Variables
              </h2>
              {variables.map((variable) => {
                return (
                  <Label className="flex flex-col gap-1">
                    {variable}
                    <Input />
                  </Label>
                );
              })}
            </div>
          ) : (
            " No variables"
          )}
        </div>
      </Panel>
    </>
  );
}
