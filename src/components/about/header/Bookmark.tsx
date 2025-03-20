import Link from "next/link";
import React from "react";

const Bookmark = () => {
  return (
    <div className="flex gap-12 items-center text-base text-secondary">
      <Link href="#about" className="text-primary">
        About
      </Link>
      <Link href="#resume">Resume</Link>
      <Link href="#skills">Skills</Link>
      <Link href={"#projects"}>Projects</Link>
      <Link href={"#contact"}>Contact</Link>
    </div>
  );
};

export default Bookmark;
