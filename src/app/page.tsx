import LandingBackground from "@/Components/LandingBackground";
import Title from "@/Components/Title";
import MainIcon from "@/Components/MainIcon";
import LandingCTA from "@/Components/LandingCTA";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-around items-center h-screen w-screen pointer-events-none">
        <MainIcon />
        <Title />
        <LandingCTA />
      </div>
      <LandingBackground />
    </>
  );
}
