import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="  w-max rounded-2xl">
      <Image src="/logo/logo.svg" alt="logo" width={45} height={45} />
    </div>
  );
};

export default Logo;
