import Squares from "@/blocks/Backgrounds/Squares/Squares";
import colorTheme from "@/Utils/colorTheme.json";

function LandingBackground() {
  return (
    <div className="h-screen w-screen bg-(--primary-color) -z-10 absolute top-0 left-0 pointer-events-auto">
      <Squares hoverFillColor={colorTheme.secondary} />
    </div>
  );
}

export default LandingBackground;
