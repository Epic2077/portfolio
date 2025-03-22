import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative flex items-center justify-between z-40">
      <Link href={"/"}>
        <Logo />
      </Link>
      <div className="flex items-center space-x-8 text-lg  text-primary">
        <Link href="/about">About</Link>
        <Link href={"#categories"}>Categories</Link>
        <Link href={"#skills"}>Skills</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>
    </header>
  );
};

export default Header;
