import LandingBackground from "@/components/LandingBackground";
import Title from "@/components/Title";
import MainIcon from "@/components/MainIcon";
import { Button } from "@/components/ui/button";
import { tektur } from "@/Utils/fonts";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-around items-center h-screen w-screen pointer-events-none">
        <MainIcon />
        <Title />
        <Button
          variant="outline"
          size={"lg"}
          className={`${tektur.className} text-3xl pointer-events-auto border-primary`}
          asChild
        >
          <Link href="/store">Dive In</Link>
        </Button>
      </div>
      <LandingBackground />
    </>
  );
}
