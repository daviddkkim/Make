import { Button } from "@/components/Button";
import { PlusIcon } from "lucide-react";
import {
  PanelLayout,
  Panel,
  PanelResizeHandle,
} from "./components/PanelLayout";
import { createClerkSupabaseServerClient } from "@/libs/supabase/server";
import QueryClient from "./components/QueryClient";
import QueriesList from "./components/QueriesList";

export default async function Page({
  params,
}: {
  params: { queryId: string };
}) {
  /* const { getToken } = useAuth();
  
    const [queries, setQueries] = useState<any>();
    const listQueries = async () => {
      // Fetches all addresses scoped to the user
      // Replace "Addresses" with your table name
      const token = await getToken({
        template: "supabase",
      })
      console.log("in page: ", token);
      const { data, error } = await supabaseClient.from("api_queries").select();
      if (!error) {
        console.log(data)
        setQueries(data);
      }
    };
  
    useEffect(() => {
      listQueries()
    }, [])
   */
  const client = await createClerkSupabaseServerClient();

  const { data, error } = await client.from("api_queries").select();

  const activeQuery = data?.filter((query) => {
    if (params.queryId) {
      if (query.id.toString() === params.queryId[0]) {
        return query;
      }
    }
  });

  return (
    <main className="bg-stone-50 h-screen w-full ">
      <PanelLayout
        panelContents={[
          <Panel className="flex flex-col">
            <div className="px-4 pt-4 pb-2">
              <Button className="w-full">
                {" "}
                <PlusIcon size={16} className="text-stone-50 mr-1" /> New query{" "}
              </Button>
            </div>
            <QueriesList
              queries={data ? data : []}
              activeQuery={activeQuery ? activeQuery[0] : {}}
            />
          </Panel>,
          <PanelResizeHandle className="w-[1px] bg-stone-200" />,
          <Panel className="px-4 py-2">
            <QueryClient activeQuery={activeQuery ? activeQuery[0] : {}} />
          </Panel>,
          <PanelResizeHandle className="w-[1px] bg-stone-200" />,
          <Panel>"right"</Panel>,
        ]}
      />

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
    </main>
  );
}
