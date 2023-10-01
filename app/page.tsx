import UrlInput from "@/components/UrlInput";


export default async function Home() {

  return (
    <main className="flex justify-center pt-7  ">
      <div className="flex gap-3 justify-center items-center flex-col " >
        <h1 className="mb-10 text-4xl capitalize " >medium pass paywall </h1>
        <UrlInput />
      </div>
    </main>
  );
}
