export default function Page() {
  return (
    <main className="bg-stone-50 h-screen w-full py-2 ">
      <div className="flex gap-5 flex flex-row flex-wrap mt-4 mb-5 mx-4 ">
        <h2 className=" max-w-[88px] text-base mt-6">Get started</h2>
        <div className="flex flex-wrap gap-5  flex-grow">
          <div className="w-full  h-[106px] border rounded-md p-4 md:max-w-[320px]">
            <div className="h-[4px] w-[32px] bg-gradient-to-r from-blue-500 to-blue-600 border border-blue-600 rounded-sm mb-1" />
            <div>
              <h2 className="text-sm">Action apps</h2>
              <p className="text-xs text-stone-600">
                {" "}
                Take actions based on a query like scheduling queries, loading
                databases, or sending messages
              </p>
            </div>
          </div>
          <div className="w-full  h-[106px] border rounded-md p-4 md:max-w-[320px]">
            <div className="h-[4px] w-[32px] bg-gradient-to-r from-orange-500 to-orange-600 border border-orange-600 rounded-sm mb-1" />

            <h2 className="text-sm">UI apps</h2>
            <p className="text-xs text-stone-600">
              {" "}
              Render a UI based on a query result or to prepare a query
            </p>
          </div>
          <div className="w-full  h-[106px] border rounded-md p-4 md:max-w-[320px]">
            <div className="h-[4px] w-[32px] bg-gradient-to-r from-stone-700 to-stone-900 border border-stone-600 rounded-sm mb-1" />

            <h2 className="text-sm">APIs</h2>
            <p className="text-xs text-stone-600">
              {" "}
              Set up and host an API based on a query
            </p>
          </div>
        </div>
      </div>
      <div className="w-full border-b" />
      <div className="flex gap-5 flex flex-col flex-wrap mt-4 mb-5 mx-4 ">
        <h2 className=" max-w-[88px] text-base mt-6">Your apps</h2>
        <div className="flex flex-wrap gap-5 flex-grow rounded-md border h-[300px]"></div>
      </div>
    </main>
  );
}
