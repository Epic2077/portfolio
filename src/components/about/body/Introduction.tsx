import SocialIcons from "@/components/elements/SocialIcons";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Introduction = () => {
  return (
    <div className="w-max flex flex-col">
      <p className="text-lg text-secondary font-semibold tracking-[3%]">
        Hi I am
      </p>
      <p className="text-2xl text-muted-foreground font-bold mt-2.5 tracking-[3%]">
        Ashkan Sadeghi
      </p>
      <TextAnimate
        animation="blurInUp"
        by="character"
        once
        delay={0.3}
        className="text-6xl bg-gradient-to-br from-primary/50 to-primary text-transparent bg-clip-text font-bold mt-8 tracking-[3%]"
      >
        Front-End Developer
      </TextAnimate>
      <div className="flex flex-row gap-5 items-center mt-12">
        <SocialIcons />
      </div>
      <div className="flex gap-6 mt-16">
        <Button className="w-28">Hire Me</Button>
        <Link href={"/cv/resume.pdf"} download={"resume"} target="_blank">
          <Button className="w-36 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground relative">
            <div className="p-1.5 bg-primary absolute top-0 right-0 animate-pulse rounded-full -mt-1.5 -mr-1.5"></div>
            Download CV
          </Button>
        </Link>
      </div>
      <div className="bg-accent p-6 flex items-center gap-7 mt-10 w-max rounded-2xl">
        <div className="flex flex-col gap-3 pr-6 border-r border-secondary">
          <p className="text-primary text-lg font-bold">
            <NumberTicker value={1} className="text-primary" />+ years
          </p>
          <TextAnimate
            animation="slideLeft"
            by="character"
            once
            delay={0.3}
            className="text-foreground text-lg"
          >
            Experiences
          </TextAnimate>
        </div>
        <div className="flex flex-col gap-3 pr-6 border-r border-secondary">
          <p className="text-primary text-lg font-bold">
            <NumberTicker value={5} className="text-primary" />+
          </p>
          <TextAnimate
            animation="slideLeft"
            by="character"
            once
            delay={0.3}
            className="text-foreground text-lg"
          >
            Project Done
          </TextAnimate>
        </div>
        <div className="flex flex-col gap-3 pr-6 border-secondary">
          <p className="text-primary text-lg font-bold">
            <NumberTicker value={3} className="text-primary" />+
          </p>
          <TextAnimate
            animation="slideLeft"
            by="character"
            once
            delay={0.3}
            className="text-foreground text-lg"
          >
            Happy Clients
          </TextAnimate>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
