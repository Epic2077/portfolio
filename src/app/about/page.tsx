import Introduction from "@/components/about/body/Introduction";
import { BlurFade } from "@/components/magicui/blur-fade";
import Cards from "@/components/resume/Cards";
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

        <div className="items-center md:items-end relative mt-10  md:mt-0">
          <BlurFade>
            <div className="w-[75%] h-[75%] bg-muted dark:bg-accent rounded-full mx-auto md:ml-auto ">
              <Image
                src={"/images/ash-nobackground.png"}
                width={700}
                height={700}
                alt="ash"
                className="z-20 grayscale-0 dark:grayscale-75"
              />
            </div>
          </BlurFade>
        </div>
      </section>
      <section>
        <Cards />
      </section>
    </div>
  );
};

export default page;
