"use client";
import { redirect } from "next/navigation";
import { MouseEventHandler } from "react";
import Button from "./ui/Button";

function LandingCTA() {
  const handleMainCTA: MouseEventHandler<HTMLButtonElement> = () => {
    redirect("/store");
  };

  return <Button size="xl" variant="outline" text="Dive In _" onClick={handleMainCTA} />;
}

export default LandingCTA;
