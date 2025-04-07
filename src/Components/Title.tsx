import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
import { tektur } from "@/Utils/fonts";

function Title() {
  return (
    <div
      className={`flex gap-2 md:text-7xl flex-col md:flex-row text-white items-center ${tektur.className} text-4xl`}
    >
      <h1 className="p-2">Games That</h1>
      <div className="bg-(--secondary-color) p-2 rounded-md ">
        <RotatingText
          texts={["earned the spotlight.", "earned our respect.", "belong here."]}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden"
        />
      </div>
    </div>
  );
}

export default Title;
