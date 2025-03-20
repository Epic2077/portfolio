import Introduction from "@/components/about/body/Introduction";
import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <section
        id="about"
        className=" h-screen flex flex-row justify-between items-center px-6"
      >
        <div className="items-start">
          <BlurFade>
            <Introduction />
          </BlurFade>
        </div>

        <div className="items-end relative">
          <BlurFade>
            <div className="w-[500px] h-[500px] bg-accent rounded-full absolute bottom-0 left-18"></div>
            <Image
              src={"/images/ash-nobackground.png"}
              width={700}
              height={700}
              alt="ash"
              className="grayscale-75 z-10"
            />
          </BlurFade>
        </div>
      </section>
    </div>
  );
};

export default page;
