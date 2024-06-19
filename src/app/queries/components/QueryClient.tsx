import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
<<<<<<< HEAD
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";

export default function QueryClient() {
  return (
    <div className="border rounded-md w-fit">
      <div className=" p-2 flex gap-2 w-fit">
        <Select defaultValue="get">
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
        <Input placeholder="https://example.com/something" />
        <Button> Submit</Button>
      </div>
      <div className="bg-stone-200 p-2 border-t text-xs">Response</div>
    </div>
  );
}
=======
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Select";

export default function QueryClient() {
    return (
        <div className="border rounded-md w-fit">
            <div className=" p-2 flex gap-2 w-fit">
                <Select defaultValue="get">
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
                <Input placeholder="https://example.com/something" />
                <Button> Submit</Button>
            </div>
            <div className="bg-stone-200 p-2 border-t text-xs">
                Response
            </div>
        </div>
    )
}
>>>>>>> main
