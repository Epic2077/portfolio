import Logo from "@/components/home/header/Logo";
import React from "react";
import Bookmark from "./Bookmark";
import { Button } from "@/components/ui/button";
import { MobileBurgerMenu } from "./Burger";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex  md:hidden w-20">
        <MobileBurgerMenu />
      </div>
      <Link href={"/"} passHref>
        <Logo />
      </Link>
      <div className="hidden md:flex">
        <Bookmark />
      </div>
      <Button className="w-20 md:w-28">Hire Me</Button>
    </div>
  );
};

export default Header;
