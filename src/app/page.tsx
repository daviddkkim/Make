"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import { PanelGroup } from "react-resizable-panels";
import DemoQueryBuilder from "./components/DemoQueryBuilder";
export default function Home() {
  return (
    <div className="bg-stone-100 w-full h-screen px-4 py-2 flex items-center justify-center">
      <div className="flex items-start gap-8">
        <h2 className="text-xl mt-4 flex items-center">Let's <div className="font-mono px-2 w-fit h-[24px] bg-[#0300E0] rounded-md text-base flex items-center justify-center text-stone-100 mx-2"
        >.make</div> apps the easy way</h2>
        <Carousel className="w-full max-w-[300px] md:max-w-[800px] ">
          <CarouselContent>
            <CarouselItem>
              {
                <div className="w-full h-[300px] flex items-center justify-center border rounded-md bg-white">
                  <PanelGroup autoSaveId="persistence" direction="horizontal">
                    <DemoQueryBuilder key={3} />
                  </PanelGroup>
                </div>
              }
            </CarouselItem>
            <CarouselItem>
              {
                <div className="w-full h-[300px] flex items-center justify-center">
                  2
                </div>
              }
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
