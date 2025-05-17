import Link from "next/link";
import MainLogo from "./svg/main-logo";
import { Button } from "./ui/button";
import { tektur } from "@/Utils/fonts";

import AccountBlob from "./AccountBlob";

function Header() {
  /**
   * Left Side:
   *  - Logo
   *  - Store
   *  - Library
   *
   * Right Side:
   *  - Search Bar
   *  - Account
   */

  return (
    <header className="flex justify-between pointer-events-auto border-b border-b-accent items-center mb-3">
      <div className="flex justify-between items-center px-8 min-w-full">
        <Link href={"/"}>
          <MainLogo height={50} width={50} />
        </Link>
        <div className="flex justify-around items-center px-8 min-w-lg">
          <Button
            asChild
            size={"lg"}
            variant={"link"}
            className={`${tektur.className} text-lg text-primary-foreground hover:text-primary`}
          >
            <Link href={"/store"}>Store</Link>
          </Button>
          <Button
            asChild
            size={"lg"}
            variant={"link"}
            className={`${tektur.className} text-lg text-primary-foreground hover:text-primary`}
          >
            <Link href={"/library"}>Library</Link>
          </Button>
          <AccountBlob initials="IM" userName="Iman" />
        </div>
      </div>
    </header>
  );
}

export default Header;
