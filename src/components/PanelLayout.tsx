"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
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
