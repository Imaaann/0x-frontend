import FeaturedGames from "@/components/FeaturedGames";
import GameList from "@/components/GameList";
import mockData from "@/../public/MOCK_DATA.json";
import { tektur } from "@/Utils/fonts";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <span className={`${tektur.className} text-foreground text-5xl ml-6`}>Featured Games</span>
        <FeaturedGames />
        <hr className="bg-primary w-full my-6" />
        <GameList games={mockData} />
      </div>
    </>
  );
}

export default Home;
