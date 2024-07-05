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
import { FocusEventHandler, useState } from "react";
import { theme } from "./JSONTreetheme";
import { toast } from "sonner";
import UrlComponent from "@/app/(app)/queries/[[...queryId]]/components/UrlComponent";
import { replaceUrlVariables } from "@/libs/variableExtractor";

const formSchema = z.object({
  method: z.enum(["get", "post", "put", "patch", "delete"]),
  url: z.string(),
});

export default function DemoQueryClient({
  activeQuery = {
    id: null,
    name: "",
    method: "get",
  },
  onUrlChange,
  variables,
  urlTooltipOpen = false,
  onUrlInputFocus,
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
  onUrlChange?: FocusEventHandler<HTMLDivElement>;
  variables: { [key: string]: string };
  urlTooltipOpen?: boolean;
  onUrlInputFocus?: FocusEventHandler<HTMLDivElement>;
}) {
  const [response, setResponse] = useState();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      method: activeQuery.method ? activeQuery.method : "get",
      url: activeQuery.url ? activeQuery.url : "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // to-do: Make request at server-side to dodge cors.
    try {
      console.log("hello");
      const finalUrl = replaceUrlVariables(values.url, variables);
      fetch(finalUrl, {
        method: values.method,
      }).then(async (response) => {
        setResponse(await response.json());
      });
      toast.success("Your query successfully ran");
    } catch (error) {
      toast.error("Your querry failed");
      console.error("Request error:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="rounded-md w-full flex flex-col gap-2 py-4">
          <div className="py-1 flex w-full max-w-full px-3">
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
                      <SelectTrigger className="w-[102px] rounded-r-none">
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
                <FormItem className="w-full max-w-[calc(100%-134px)]">
                  <FormControl>
                    <UrlComponent
                      {...field}
                      tooltipOpen={urlTooltipOpen}
                      variables={variables}
                      url={field.value}
                      onFocus={onUrlInputFocus}
                      placeholder="https://example.com/something"
                      onBlur={(e) => {
                        form.setValue(
                          "url",
                          e.currentTarget.textContent
                            ? e.currentTarget.textContent
                            : "",
                        );
                        onUrlChange && onUrlChange(e);
                      }}
                    />
                    {/* 
                    <Input
                      placeholder="https://example.com/something"
                      {...field}
                      className="w-full hidden"
                    /> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="icon" className="rounded-l-none">
              {" "}
              <Play size="14" className="text-stone-50" />
            </Button>
          </div>
          <div className="bg-stone-100 rounded-md p-2 border text-sm flex flex-col mx-3">
            {response ? (
              <>
                <div className="text-sm flex">
                  {" "}
                  <div className="rounded-md border border-green-600 bg-gradient-to-b from-green-500 to-green-600 w-[16px] h-[16px] flex items-center justify-center mr-2 mt-[2px]">
                    <Check size={10} className="text-green-50" />
                  </div>
                  Your query successfully ran
                </div>
                <JSONTree data={response} theme={theme} invertTheme={false} />
              </>
            ) : (
              <h2 className="text-sm text-stone-500 font-mono flex items-center gap-2">
                Click{" "}
                <Play
                  size="20"
                  className="text-stone-700 border border-stone-500 p-1 rounded-md"
                />
                to run query
              </h2>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}
