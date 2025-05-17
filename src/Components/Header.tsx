import Link from "next/link";
import MainLogo from "./svg/main-logo";
import { Button } from "./ui/button";
import { tektur } from "@/Utils/fonts";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
    <header className="flex justify-between pointer-events-auto border-b border-b-accent items-center">
      <div className="flex justify-around items-center px-8 min-w-lg">
        <Link href={"/"}>
          <MainLogo height={50} width={50} />
        </Link>
        <Avatar>
          <AvatarFallback>IM</AvatarFallback>
        </Avatar>
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
      </div>
    </header>
  );
}

export default Header;
