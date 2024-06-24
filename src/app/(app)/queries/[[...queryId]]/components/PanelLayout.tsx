"use client";

import { Button } from "@/components/Button";
import QueryClient from "./QueryClient";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { PlusIcon } from "lucide-react";
import QueriesList from "./QueriesList";
import { ReactNode } from "react";


const PanelLayout = ({
    panelContents
}: {
    panelContents: ReactNode[]
}) => {

    return (
        <PanelGroup autoSaveId="persistence" direction="horizontal">
            {panelContents.map((content) => {

                return (
                    content
                )
            })}
            {/* <Panel className="border-r flex flex-col">
                <div className="px-4 pt-4 pb-2">
                    <Button className="w-full">
                        {" "}
                        <PlusIcon size={16} className="text-stone-50 mr-1" /> New query{" "}
                    </Button>
                </div>
                <QueriesList queries={[]} />
            </Panel>
            <PanelResizeHandle />
            <Panel className="px-4 py-2">
                <QueryClient />
            </Panel>
            <PanelResizeHandle />
            <Panel className="border-l">right</Panel> */}
        </PanelGroup>
    )
}

export { PanelLayout, Panel, PanelResizeHandle }