import Link from "next/link";
import {
  Panel,
  PanelLayout,
  PanelResizeHandle,
} from "@/components/PanelLayout";

export default function Page() {
  return (
    <main className="bg-stone-50 h-[calc(100vh-48px)] w-full ">
      <PanelLayout
        panelContents={[
          <Panel className="flex flex-col" key={1} defaultSize={20}>
            hello
          </Panel>,
          <PanelResizeHandle className="w-[1px] bg-stone-200" key={2} />,
          <Panel className="flex flex-col" key={3} defaultSize={20}>
            hello
          </Panel>,
          <PanelResizeHandle className="w-[1px] bg-stone-200" key={4} />,
          <Panel className="flex flex-col" key={5} defaultSize={20}>
            hello
          </Panel>,
        ]}
      />
    </main>
  );
}
