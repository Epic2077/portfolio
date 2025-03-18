import React from "react";
import Socials from "./Socials";
import Name from "./Name";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-[-55px] pl-6 flex justify-between items-center">
      <Socials />
      <Link href={"/about"} className="mt-20 z-30">
        <div>
          <Button className="bg-transparent border border-primary w-44 animate-bounce text-foreground hover:bg-primary hover:text-background">
            Continue
          </Button>
        </div>
      </Link>
      <Name />
    </div>
  );
};

export default Footer;
