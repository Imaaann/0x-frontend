import Link from "next/link";
import MainLogo from "./svg/main-logo";
import { Button } from "./ui/button";
import { tektur } from "@/Utils/fonts";
import { Input } from "./ui/input";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
          <Link href={"/personal/games"}>Library</Link>
        </Button>
      </div>
      <div className="flex justify-around items-center px-8 min-w-lg gap-4">
        <Input type="text" placeholder="Search..." />
        <Avatar>
          <AvatarImage src="https://github.com/imaaann.png" alt="@imaaann" />
          <AvatarFallback>IM</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default Header;
