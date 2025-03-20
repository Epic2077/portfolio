import Logo from "@/components/home/header/Logo";
import React from "react";
import Bookmark from "./Bookmark";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <Bookmark />
      <Button className="w-28">Hire Me</Button>
    </div>
  );
};

export default Header;
