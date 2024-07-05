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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { Label } from "@/components/Label";
import { useState } from "react";
import { Button } from "@/components/Button";
export default function Home() {
  const [appType, setAppType] = useState("scheduled");

  return (
    <div className="bg-stone-100 w-full h-screen px-4 py-2 flex items-center justify-center">
      <div className="flex items-start gap-8">
        <h1 className="text-xl flex items-center">
          Let{"'"}s{" "}
          <div className="font-mono px-2 w-fit h-[24px] bg-[#0300E0] rounded-md text-base flex items-center justify-center text-stone-100 mx-2">
            .make
          </div>{" "}
          apps the easy way
        </h1>
        <Carousel className="w-full max-w-[300px] md:max-w-[800px] ">
          <CarouselContent>
            <CarouselItem>
              <h2 className="font-medium text-base mb-4 flex items-center gap-2 mt-1">
                <div className="h-5 w-5 text-sm rounded-md border flex items-center justify-center bg-stone-950 text-stone-100">
                  1
                </div>
                Query an API with variables
              </h2>
              {
                <div className="w-full h-[300px] flex items-center justify-center border rounded-md bg-white">
                  <PanelGroup autoSaveId="persistence" direction="horizontal">
                    <DemoQueryBuilder key={3} />
                  </PanelGroup>
                </div>
              }
            </CarouselItem>
            <CarouselItem>
              <h2 className="font-medium text-base mb-4 flex items-center gap-2 mt-1">
                <div className="h-5 w-5 text-sm rounded-md border flex items-center justify-center bg-stone-950 text-stone-100">
                  2
                </div>{" "}
                Transform the data from the API and create an Action
              </h2>
              {
                <div className="w-full h-[300px] flex items-center justify-center">
                  2
                </div>
              }
            </CarouselItem>
            <CarouselItem>
              <h2 className="font-medium text-base mb-4 flex items-center gap-2 mt-1">
                <div className="h-5 w-5 text-sm rounded-md border flex items-center justify-center bg-stone-950 text-stone-100">
                  3
                </div>{" "}
                Host the API or schedule it
              </h2>
              {
                <div className="w-fit h-fit flex items-center">
                  <div className="bg-white border rounded-md w-full h-full flex flex-col py-4 px-3 gap-4">
                    <div className="flex flex-col gap-1">
                      <Label>App type</Label>
                      <Select
                        defaultValue="scheduled"
                        onValueChange={(value) => {
                          setAppType(value);
                        }}
                      >
                        <SelectTrigger className="w-[160px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="scheduled">Scheduled</SelectItem>
                          <SelectItem value="hosted">Hosted</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {appType === "scheduled" && (
                      <div className="flex flex-col gap-1">
                        <Label>Schedule cadence</Label>
                        <Select defaultValue="5mins">
                          <SelectTrigger className="w-[160px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5mins">every 5 mins</SelectItem>
                            <SelectItem value="30mins">
                              every 30 mins
                            </SelectItem>
                            <SelectItem value="1hour">every 1 hour</SelectItem>
                            <SelectItem value="1day">every 1 day</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    <Button className="w-fit"> Save</Button>
                  </div>
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
