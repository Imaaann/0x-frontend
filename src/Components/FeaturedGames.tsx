import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function FeaturedGame({ n }: { n: number }) {
  return (
    <div className="h-64 w-full bg-background flex justify-center items-center border border-primary">
      {n}
    </div>
  );
}

function FeaturedGames() {
  return (
    <Carousel className="w-full max-w-sm pointer-events-auto">
      <CarouselContent>
        <CarouselItem>
          <FeaturedGame n={1} />
        </CarouselItem>
        <CarouselItem>
          <FeaturedGame n={2} />
        </CarouselItem>
        <CarouselItem>
          <FeaturedGame n={3} />
        </CarouselItem>
        <CarouselItem>
          <FeaturedGame n={4} />
        </CarouselItem>
        <CarouselItem>
          <FeaturedGame n={5} />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default FeaturedGames;
