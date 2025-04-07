import FeaturedGames from "@/components/FeaturedGames";
import Header from "@/components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <FeaturedGames />
      </div>
    </>
  );
}

export default Home;
