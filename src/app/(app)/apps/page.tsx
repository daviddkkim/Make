export default function Page() {
  return (
    <main className="bg-stone-50 h-screen w-full px-4 py-2 ">
      <div className="max-w-[1080px] flex w-full gap-8">
        <div className="w-full h-[200px] border rounded-md p-4">
          <div>
            <h2 className="text-sm">Action apps</h2>
            <p className="text-xs text-stone-600"> Take actions based on a query like scheduling queries, loading databases, or sending messages</p>
          </div>
        </div>
        <div className="w-full h-[200px] border rounded-md p-4">
          <h2 className="text-sm">UI apps</h2>
          <p className="text-xs text-stone-600"> Render a UI based on a query result or to prepare a query</p>

        </div>
        <div className="w-full h-[200px] border rounded-md p-4">
          <h2 className="text-sm">APIs</h2>
          <p className="text-xs text-stone-600"> Set up and host an API based on a query</p>

        </div>
      </div>
    </main>
  );
}
