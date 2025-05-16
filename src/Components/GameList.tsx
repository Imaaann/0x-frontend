import { tektur } from "@/Utils/fonts";
import { Game } from "./FeaturedGames";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function GameList({ games }: { games: Game[] }) {
  return (
    <div className={`w-full flex flex-wrap flex-col ${tektur.className}`}>
      <span className={`${tektur.className} text-foreground text-5xl ml-6`}>Game List</span>
      <div className="flex flex-row gap-6 m-9 flex-wrap">
        {games.map((data, index) => {
          return (
            <Card key={index} className="w-fit h-fit shadow-primary shadow-md">
              <CardHeader>
                <CardTitle>{data.gameName}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Image
                  src={data.imageURL}
                  width={250}
                  height={250}
                  alt={data.description}
                  className="rounded-md"
                />
                <div className="flex flex-row justify-between items-center">
                  <span className="font-light text-lg">
                    {data.gamePrice == 0 ? "FREE" : data.gamePrice}
                  </span>
                  <Button asChild className="pointer-events-auto">
                    <Link href={`/store/${data.gameId}`}>Download</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default GameList;
