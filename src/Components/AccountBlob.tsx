import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Popover } from "./ui/popover";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";

function AccountBlob({ initials, userName }: { initials: string; userName: string }) {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col justify-center gap-2 items-center border border-muted-foreground rounded-md px-2 py-2 pointer-events-auto">
          <span className="text-muted-foreground text-lg">{userName}</span>
          <Button variant="ghost" className="h-fit w-fit py-1 px-2 hover:text-destructive" asChild>
            <Link href={"/login"}>Logout</Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default AccountBlob;
