import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Resume = () => {
  return (
    <div>
      <h2 className="text-4xl text-center font-bold">About Me</h2>
      <p className="text-muted-foreground dark:text-secondary text-center mt-4 text-lg">
        Front-End Developing with Next.js And Also React.js
      </p>
      <div className="flex items-center justify-between mt-10 px-10">
        <Image
          src={"/images/ashkan.jpg"}
          alt="ash"
          width={400}
          height={600}
          className="rounded-3xl grayscale-50 brightness-70"
        />
        <div className=" w-3/5 flex flex-col gap-6">
          <p className="text-justifyfont-medium text-xl text-muted-foreground dark:text-secondary leading-[190%]">
            I&apos;m a front-end developer who loves turning ideas into
            interactive, user-friendly websites. With a strong foundation in
            React, Next.js, and TypeScript, I enjoy building interfaces that are
            not only functional but also a joy to use. My background in English
            Literature has given me a unique perspective on storytelling and
            design, which I bring to every project. I’ve sharpened my skills
            through a rigorous React.js bootcamp and hands-on experience with
            tools like Figma and Tailwind CSS. I’m a quick learner and a team
            player, always ready to tackle new challenges and collaborate on
            innovative solutions. My mission? To create web experiences that
            make a difference, one line of code at a time.
          </p>
          <Link href={"/cv/resume.pdf"} download={"resume"} target="_blank">
            <Button className="w-36 bg-primary border-2  hover:bg-secondary hover:text-secondary-foreground relative">
              Download CV
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
