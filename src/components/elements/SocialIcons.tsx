import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialIcons = () => {
  const obj = [
    {
      name: "github",
      link: "https://github.com/Epic2077",
      icon: <Github className="text-2xl text-muted-foreground" />,
    },
    {
      name: "linkedin",
      link: "https://linkedin.com/in/https://www.linkedin.com/in/mohammadhosseinsadeghi/",
      icon: <Linkedin className="text-2xl text-muted-foreground" />,
    },
    {
      name: "instagram",
      link: "https://instagram.com/Ashkan_2077",
      icon: <Instagram className="text-2xl text-muted-foreground" />,
    },
  ];

  return (
    <>
      {obj.map((item, index) => (
        <div
          className="p-2 bg-accent border border-secondary rounded-full"
          key={index}
        >
          <Link href={item.link}>{item.icon}</Link>
        </div>
      ))}
    </>
  );
};

export default SocialIcons;
