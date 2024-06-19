"use client";

import { Button } from "@/components/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/Form";
import { Input } from "@/components/Input";
import { useForm } from "react-hook-form";

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

const formSchema = z.object({
  method: z.string(),
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
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
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
        <div className="border rounded-md w-full">
          <div className=" p-2 flex gap-2 w-full">
            <FormField
              name="method"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select defaultValue="method" {...field}>
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
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/something"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit"> Submit</Button>
          </div>
          <div className="bg-stone-200 p-2 border-t text-xs flex flex-col">
            <h2 className="text-xs font-medium">Response</h2>

            {response ? (
              <p className="text-xs"> {JSON.stringify(response)}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}
