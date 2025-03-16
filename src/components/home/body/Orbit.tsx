import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import Image from "next/image";
import React from "react";

export function Orbit() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden z-20">
      <Image
        src={"/images/ashkan.jpg"}
        alt="ash"
        width={180}
        height={180}
        className="grayscale-25 rounded-full shadow-2xl "
      />
      <OrbitingCircles iconSize={40} radius={150}>
        <Icons.Tailwind />
        <Icons.Redux />
        <Icons.Shadcn />
        <Icons.Vite />
        <Icons.Figma />
      </OrbitingCircles>
      <OrbitingCircles iconSize={50} radius={235} reverse speed={1.5}>
        <Icons.Next />
        <Icons.JavaScript />
        <Icons.React />
        <Icons.TypeScript />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  Next: () => (
    <Image
      src={"/icons/nextjs.svg"}
      alt="next"
      width={100}
      height={100}
      className="dark:invert"
    />
  ),
  Tailwind: () => (
    <Image
      src={"/icons/tailwind.svg"}
      alt="tailwind"
      width={100}
      height={100}
      className=""
    />
  ),
  React: () => (
    <Image
      src={"/icons/react.svg"}
      alt="react"
      width={100}
      height={100}
      className=""
    />
  ),
  Redux: () => (
    <Image
      src={"/icons/redux.svg"}
      alt="redux"
      width={100}
      height={100}
      className=""
    />
  ),
  Vite: () => (
    <Image
      src={"/icons/vite.svg"}
      alt="vite"
      width={100}
      height={100}
      className=""
    />
  ),
  Shadcn: () => (
    <Image
      src={"/icons/shadcn.svg"}
      alt="shadcn"
      width={100}
      height={100}
      className="dark:invert"
    />
  ),
  JavaScript: () => (
    <Image
      src={"/icons/javascript.svg"}
      alt="js"
      width={100}
      height={100}
      className="rounded-full"
    />
  ),
  Figma: () => (
    <Image
      src={"/icons/figma.svg"}
      alt="figma"
      width={100}
      height={100}
      className="rounded-full"
    />
  ),
  TypeScript: () => (
    <Image
      src={"/icons/typescript.svg"}
      alt="typescript"
      width={100}
      height={100}
      className="rounded-full"
    />
  ),
};
