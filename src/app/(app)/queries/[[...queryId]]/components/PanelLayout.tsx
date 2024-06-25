"use client";

import { Button } from "@/components/Button";
import QueryClient from "./QueryClient";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { PlusIcon } from "lucide-react";
import QueriesList from "./QueriesList";
import { ReactNode } from "react";

const PanelLayout = ({ panelContents }: { panelContents: ReactNode[] }) => {
  return (
    <PanelGroup autoSaveId="persistence" direction="horizontal">
      {panelContents.map((content) => {
        return content;
      })}
    </PanelGroup>
  );
};

export { PanelLayout, Panel, PanelResizeHandle };
