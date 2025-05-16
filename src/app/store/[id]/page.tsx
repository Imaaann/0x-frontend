import mockData from "@/../public/MOCK_DATA.json";
import { Button } from "@/components/ui/button";
import { tektur } from "@/Utils/fonts";
import Image from "next/image";
import Link from "next/link";

interface StoragePageProps {
  params: { id: number };
}

async function Home({ params }: StoragePageProps) {
  const { id } = await params;

  // change data to use the backend
  const data = mockData[id];

  return (
    <div className={`flex flex-col justify-center items-center gap-6 ${tektur.className} py-10`}>
      <h1 className={`text-7xl`}>{data.gameName}</h1>
      <Image
        src={data.imageURL}
        height={512}
        width={450}
        alt={`Image of the game ${data.gameName}`}
        className="rounded-4xl shadow shadow-accent"
      />
      <div className="flex flex-col justify-center items-center gap-2">
        <span className="text-3xl">{data.gameName}</span>
        <span>{data.description}</span>
      </div>
      <div className="flex flex-row justify-around items-center mx-3 pointer-events-auto gap-8">
        <Button asChild variant="ghost">
          <Link href="/store">Cancel</Link>
        </Button>
        <Button asChild>
          <Link href={data.downloadURL}>Download</Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
