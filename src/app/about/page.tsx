import Introduction from "@/components/about/body/Introduction";
import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <section
        id="about"
        className=" h-lvh flex flex-col md:flex-row md:justify-between items-center px-4 md:px-6 "
      >
        <div className="items-start">
          <BlurFade>
            <Introduction />
          </BlurFade>
        </div>

        <div className="items-center md:items-end relative mt-4 md:mt-0">
          <BlurFade>
            <div className="w-[70%] h-[70%] bg-muted dark:bg-accent rounded-full absolute bottom-0 left-15 md:left-18 "></div>
            <Image
              src={"/images/ash-nobackground.png"}
              width={700}
              height={700}
              alt="ash"
              className="z-20 grayscale-0 dark:grayscale-75"
            />
          </BlurFade>
        </div>
      </section>
    </div>
  );
};

export default page;
