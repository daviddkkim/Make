import {
  PanelLayout,
  Panel,
  PanelResizeHandle,
} from "./components/PanelLayout";
import { createClerkSupabaseServerClient } from "@/libs/supabase/server";
import QueryClient from "./components/QueryClient";
import QueriesList from "./components/QueriesList";
import QueryBuilder from "./components/QueryBuilder";

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
    <main className="bg-stone-50 h-[calc(100vh-48px)] w-full ">
      <PanelLayout
        panelContents={[
          <Panel className="flex flex-col" key={1} defaultSize={20}>
            <div style={{ overflow: "auto" }} className="h-full">
              <QueriesList
                queries={data ? data : []}
                activeQuery={activeQuery ? activeQuery[0] : {}}
              />
            </div>
          </Panel>,
          <PanelResizeHandle className="w-[1px] bg-stone-200" key={2} />,
          <QueryBuilder activeQuery={activeQuery ? activeQuery[0] : {}} key={3} />,
        ]}
      />
    </main>
  );
}
