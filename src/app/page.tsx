import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-sand-100-light dark:bg-sand-100-dark text-sand-1200-light dark:text-sand-1200-dark  px-4 py-2 ">

      <div className="border border-sand-600-light dark:border-sand-600-dark rounded-md">
        <div className=" p-2 flex gap-2">
          <select>
            <option>GET</option>
            <option>POST</option>
          </select>
          <input placeholder="https://example.com/something" />
          <button> Submit</button>
        </div>
        <div className="bg-sand-300-light dark:bg-sand-300-dark p-2 border-t border-sand-600-light dark:border-sand-600">
        hello
        </div>
      </div>
    </main>
  );
}
