import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import mockData from "@/../public/MOCK_DATA.json";
import Image from "next/image";
import { tektur } from "@/Utils/fonts";
import { Button } from "./ui/button";
import Link from "next/link";

export type Game = {
  gameId: number;
  gameName: string;
  gamePrice: number | string;
  description: string;
  imageURL: string;
  downloadURL: string;
};

function FeaturedGame({ gameName, gamePrice, description, imageURL, downloadURL }: Game) {
  return (
    <div className="min-w-full h-[28rem] relative">
      <Image
        src={imageURL}
        alt={`image representing the game ${gameName}`}
        fill={true}
        className="h-full w-full rounded-md absolute top-0 left-0 -z-10  border border-primary "
        title={description}
      />
      <section className="bottom-0 left-0 absolute flex justify-between items-center w-full px-4">
        <div className="flex flex-col gap-1 my-2">
          <span className={` font-light text-xl text-foreground ${tektur.className} `}>
            {gamePrice}
          </span>
          <span className={` font-bold text-3xl text-foreground ${tektur.className}`}>
            {gameName}
          </span>
        </div>
        <Button size={"lg"} className={`${tektur.className} text-lg`} asChild>
          <Link href={downloadURL}>Download</Link>
        </Button>
      </section>
    </div>
  );
}

function FeaturedGames() {
  return (
    <Carousel className="w-full max-w-5xl pointer-events-auto my-4">
      <CarouselContent>
        {mockData.map((data, index) => {
          return (
            <CarouselItem key={index}>
              <FeaturedGame
                gameId={data.gameId}
                gameName={data.gameName}
                gamePrice={data.gamePrice == 0 ? "FREE" : data.gamePrice}
                description={data.description}
                imageURL={data.imageURL}
                downloadURL={data.downloadURL}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default FeaturedGames;
