"use client";

import { Button } from "@/components/Button";
import QueryClient from "./components/QueryClient";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { PlusIcon } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-stone-50 h-screen w-full ">
      <PanelGroup autoSaveId="persistence" direction="horizontal">
        <Panel className="border-r flex flex-col">
          <div className="px-4 pt-4 pb-2">
            <Button className="w-full">
              {" "}
              <PlusIcon size={16} className="text-stone-50 mr-1" /> New query{" "}
            </Button>
          </div>
          <Button variant={"ghost"} className="justify-start rounded-none" size={"lg"}>
            {" "}
            Query 1
          </Button>
          <Button variant={"ghost"} className="justify-start rounded-none" size={"lg"}>
            {" "}
            Query 2
          </Button>
        </Panel>
        <PanelResizeHandle />
        <Panel className="px-4 py-2">
          <QueryClient />
        </Panel>
        <PanelResizeHandle />
        <Panel className="border-l">right</Panel>
      </PanelGroup>
    </main>
  );
}
