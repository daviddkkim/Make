import { Button } from "@/components/Button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Select";

export default function Home() {
  return (
    <main className="bg-stone-100 h-screen w-full  px-4 py-2 ">
      <div className="border rounded-md">
        <div className=" p-2 flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <input placeholder="https://example.com/something" />
          <Button> Submit</Button>
        </div>
        <div className="bg-stone-200 p-2 border-t">
          Response
        </div>
      </div>
    </main>
  );
}
