"use client";
import Waves from "@/blocks/Backgrounds/Waves/Waves";
import { useTheme } from "next-themes";

function LandingBackground() {
  const { theme } = useTheme();

  return (
    <div className="h-screen w-screen -z-10 absolute top-0 left-0 pointer-events-auto">
      <Waves lineColor="#EA580C" backgroundColor={theme === "light" ? "#ffffff" : "#101010"} />
    </div>
  );
}

export default LandingBackground;
