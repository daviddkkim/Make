"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"
import QueryBuilder from "./(app)/queries/[[...queryId]]/components/QueryBuilder";
import { PanelGroup } from "react-resizable-panels";

export default function Home() {
  return (
    <div className="bg-stone-100 w-full h-screen px-4 py-2 flex items-center justify-center">
      <Carousel className="w-full max-w-[300px] md:max-w-[800px] ">
        <CarouselContent>
          <CarouselItem>
            {
              <div className="w-full h-[300px] flex items-center justify-center border rounded-md bg-white">
                <PanelGroup autoSaveId="persistence" direction="horizontal">
                  <QueryBuilder
                    activeQuery={{}}
                    key={3}
                  />
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
  );
}
