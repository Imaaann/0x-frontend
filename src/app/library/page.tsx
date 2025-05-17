import FeaturedGames, { Game } from "@/components/FeaturedGames";
import GameList from "@/components/GameList";
import mockData from "@/../public/MOCK_DATA.json";
import { tektur } from "@/Utils/fonts";

function Home() {
  // TODO: fetch user id from database instead
  const userGames: Game[] = mockData.slice(0, 3);

  return (
    <div className="flex justify-center items-center flex-col">
      <span className={`${tektur.className} text-foreground text-5xl ml-6`}>Your library</span>
      <FeaturedGames games={userGames} />
      <hr className="bg-primary w-full my-6" />
      <GameList games={userGames} />
    </div>
  );
}

export default Home;
