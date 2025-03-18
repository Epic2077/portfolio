import React from "react";
import Socials from "./Socials";
import Name from "./Name";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const Footer = () => {
  return (
    <div className="mt-[-55px] pl-6 flex justify-between items-center">
      <Socials />
      <Link href={"/about"} className="mt-20 z-30">
        <div>
          <InteractiveHoverButton>Continue</InteractiveHoverButton>
        </div>
      </Link>
      <Name />
    </div>
  );
};

export default Footer;
