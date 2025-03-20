import SocialIcons from "@/components/elements/SocialIcons";
import Status from "@/components/elements/Status";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Introduction = () => {
  return (
    <div className="flex flex-col w-full sm:w-auto md:w-auto">
      <p className="text-center md:text-left sm:text-base md:text-lg text-muted font-semibold tracking-[3%]">
        Hi I am
      </p>
      <h1 className="text-center sm:text-center md:text-left text-xl md:text-2xl text-secondary mt-2.5 font-semibold tracking-[3%]">
        Ashkan Sadeghi
      </h1>
      <TextAnimate
        animation="blurInUp"
        by="character"
        once
        delay={0.3}
        className="text-4xl sm:text-4xl md:text-6xl text-center md:text-left bg-gradient-to-br from-primary/50 to-primary text-transparent bg-clip-text font-bold mt-8 tracking-[3%]"
      >
        Front-End Developer
      </TextAnimate>
      <div className="flex mx-auto md:mx-0 flex-row gap-5 items-center mt-12">
        <SocialIcons />
      </div>
      <div className="flex mx-auto md:mx-0 gap-6 mt-16">
        <Button className="w-28">Hire Me</Button>
        <Link href={"/cv/resume.pdf"} download={"resume"} target="_blank">
          <Button className="w-36 bg-transparent border-2 text-primary dark:border-secondary dark:text-secondary hover:bg-secondary hover:text-secondary-foreground relative">
            <div className="p-1.5 bg-primary absolute top-0 right-0 animate-pulse rounded-full -mt-1.5 -mr-1.5"></div>
            Download CV
          </Button>
        </Link>
      </div>
      <Status />
    </div>
  );
};

export default Introduction;
