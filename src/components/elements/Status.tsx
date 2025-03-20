import React from "react";
import { NumberTicker } from "../magicui/number-ticker";
import { TextAnimate } from "../magicui/text-animate";
import { cn } from "@/lib/utils";

const Status = () => {
  const obj = [
    {
      text: "+ years",
      value: 1,
      title: "Experiences",
      br: true,
    },
    {
      text: "+",
      value: 5,
      title: "Project Done",
      br: true,
    },
    {
      text: "+",
      value: 3,
      title: "Happy Clients",
      br: false,
    },
  ];

  return (
    <div className="bg-muted dark:bg-accent p-4 md:p-6 flex items-center gap-7 mt-10 w-max mx-auto md:mx-0 rounded-2xl">
      {obj.map((item, index) => (
        <div
          className={cn(
            "flex flex-col gap-2 md:gap-3  md:pr-6 border-secondary",
            item.br ? "border-r pr-4" : "pr2"
          )}
          key={index}
        >
          <p className="text-primary sm:text-base md:text-lg font-bold">
            <NumberTicker value={item.value} className="text-primary" />
            {item.text}
          </p>
          <TextAnimate
            animation="slideLeft"
            by="character"
            once
            delay={0.3}
            className="text-foreground text-base md:text-lg"
          >
            {item.title}
          </TextAnimate>
        </div>
      ))}
    </div>
  );
};

export default Status;
