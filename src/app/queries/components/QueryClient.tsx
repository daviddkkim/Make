"use client";

import { Button } from "@/components/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/Form";
import { Check, Play } from "lucide-react";
import { Input } from "@/components/Input";
import { useForm } from "react-hook-form";
import { JSONTree } from "react-json-tree";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { theme } from "./JSONTreetheme";
import { Label } from "@/components/Label";

const formSchema = z.object({
  method: z.enum(["get", "post", "put", "patch", "delete"]),
  url: z.string(),
});

export default function QueryClient() {
  const [response, setResponse] = useState();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      method: "get",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // to-do: Make request at server-side to dodge cors.
    try {
      fetch(values.url, {
        method: values.method,
      }).then(async (response) => {
        setResponse(await response.json());
      });
    } catch (error) {
      console.error("Request error:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="rounded-md w-full">
          <div className="py-2 flex gap-2 w-full">
            <FormField
              name="method"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-[160px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="get">GET</SelectItem>
                        <SelectItem value="post">POST</SelectItem>
                        <SelectItem value="put">PUT</SelectItem>
                        <SelectItem value="patch">PATCH</SelectItem>
                        <SelectItem value="delete">DELETE</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name={"url"}
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="https://example.com/something"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size={"icon"}>
              {" "}
              <Play size="14" className="text-stone-50" />
            </Button>
            <Button onClick={(e)=>{e.preventDefault()}}>
              Save
            </Button>
          </div>
          <div className="bg-stone-100 rounded-md p-2 border text-sm flex flex-col">
            {response ? (
              <>
                <p className="text-sm flex">
                  {" "}
                  <div className="rounded-md border border-green-600 bg-gradient-to-b from-green-500 to-green-600 w-[16px] h-[16px] flex items-center justify-center mr-1">
                    <Check size={10} className="text-green-50" />
                  </div>
                  Your query successfully ran
                </p>
                <JSONTree data={response} theme={theme} invertTheme={false} />
              </>
            ) : (
              <h2 className="text-sm text-stone-500">
                Click submit to run query
              </h2>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}
