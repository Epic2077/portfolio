import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Socials = () => {
  return (
    <div className="flex flex-col gap-6">
      <Github className="w-6 h-6 " />
      <Linkedin className="w-6 h-6 text-primary" />
      <Instagram className="w-6 h-6" />
    </div>
  );
};

export default Socials;
