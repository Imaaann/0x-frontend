import { tektur } from "@/Utils/fonts";
import Link from "next/link";
import MainLogo from "./svg/main-logo";

function Footer() {
  return (
    <footer
      className={` flex justify-around items-center gap-4 px-6 py-4 border-t border-primary text-foreground pointer-events-auto ${tektur.className}`}
    >
      <Link href={"/"}>
        <MainLogo height={50} width={50} />
      </Link>
      <Link href={"https://example.com"} className="text-md text-foreground">
        Git-Hub Repository
      </Link>
    </footer>
  );
}

export default Footer;
