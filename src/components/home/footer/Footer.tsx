import React from "react";
import Socials from "./Socials";
import Name from "./Name";

const Footer = () => {
  return (
    <div className="mt-[-55px] pl-6 flex justify-between items-center">
      <Socials />
      <Name />
    </div>
  );
};

export default Footer;
