
import Image from "next/image";
import { fetchGifs } from "./lib/fetchGifs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default async function Home() {

const {gifs} = await fetchGifs();
return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="container">
        <h1 className="text-4xl font-bold">Giphy API</h1>
        <p className="text-xl">Giphy API with Next.js</p>
     </div>
    <div className="mb-8 flex ">
      <Input
        type="text"
        placeholder="Search for GIFs..."
        className="p-2 border border-gray-300 rounded"
      />
      <Button
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        variant="ghost"
      >
        Search
      </Button>
    </div>

    {/* Gifs Display */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {gifs &&
        gifs.map((gif) => (
          <div key={gif.id} className="mb-4">
            <Image
              src={gif.images.fixed_height.url}
              alt={gif.title}
              width={200}
              height={200}
            />
          </div>
        ))}
    </div>
  </main>
);
}

