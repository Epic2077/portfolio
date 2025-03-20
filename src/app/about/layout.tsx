import Header from "@/components/about/header/Header";
import React, { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen ">
      <section className="px-12">
        <header className="absolute top-0 left-0 w-full px-12 py-8">
          <Header />
        </header>
        <main>{children}</main>
      </section>
      <footer></footer>
    </div>
  );
};

export default AboutLayout;
