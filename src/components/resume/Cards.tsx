import Image from "next/image";
import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";

const Cards = () => {
  const obj = [
    {
      title: "React",
      description:
        "Skilled in building dynamic web apps using React, with expertise in hooks, JSX, and state management via Context API and Redux.",
      icon: <Image src="/icons/react.svg" width={50} height={50} alt="React" />,
      link: "#",
    },
    {
      title: "Next.js & Server-Side Rendering",
      description:
        "Proficient in Next.js, leveraging SSR, ISR, and server components to optimize performance and user experience.",
      icon: (
        <Image
          src="/icons/nextjs.svg"
          width={50}
          height={50}
          alt="Next.js"
          className="dark:invert"
        />
      ),
      link: "#",
    },
    {
      title: "UI/UX Design & Prototyping",
      description:
        "Experienced in designing intuitive interfaces with Figma, focusing on user-centered design and responsive layouts.",
      icon: <Image src="/icons/figma.svg" width={50} height={50} alt="Figma" />,
      link: "#",
    },
    {
      title: "TypeScript & JavaScript Expertise",
      description:
        "Strong command of TypeScript and JavaScript, using interfaces, async functions, and functional programming for robust code.",
      icon: (
        <Image
          src="/icons/typescript.svg"
          width={50}
          height={50}
          alt="TypeScript"
        />
      ),
      link: "#",
    },
    {
      title: "State Management (Redux & Context)",
      description:
        "Adept at managing complex app state with Redux Toolkit and Context API, ensuring scalability and maintainability.",
      icon: <Image src="/icons/redux.svg" width={50} height={50} alt="Redux" />,
      link: "#",
    },
    {
      title: "Responsive Design with CSS Frameworks",
      description:
        "Expert in crafting responsive UIs with Tailwind CSS, Flexbox, and Grid, enhanced by animations and media queries.",
      icon: (
        <Image
          src="/icons/tailwind.svg"
          width={50}
          height={50}
          alt="Tailwind CSS"
        />
      ),
      link: "#",
    },
  ];

  return (
    <div className="md:mt-20">
      <h3 className="text-center font-bold text-4xl">Categories</h3>
      <p className="mt-4 text-center">
        Here are the key skills categorized for your reference:
      </p>
      <div className="w-full mx-auto px-8">
        <HoverEffect items={obj}></HoverEffect>
      </div>
    </div>
  );
};

export default Cards;
