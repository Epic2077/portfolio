import Header from "@/components/about/header/Header";
import React, { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen ">
      <section className="px-0 md:px-12">
        <header className="md:absolute md:top-0 md:left-0 w-full px-6 md:px-12 py-8">
          <Header />
        </header>
        <main>{children}</main>
      </section>
      <footer></footer>
    </div>
  );
};

export default AboutLayout;
