'use client'

import React from "react";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Link from "next/link";

const AnimatedBtn = () => {
  return (
    <div className="grid  place-content-center bg-black p-4 mt-2">
      <DrawOutlineButton> 
      <Link href={'/membership'}>
        <div className="flex gap-1">
          <h1>Membership</h1>
          <PersonAddAltOutlinedIcon />
        </div>  
      </Link>
    </DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-1 font-medium text-slate-100 transition-colors duration-[400ms] "
    >
      <span>{children}</span>
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-purple-600 to-orange-300 transition-all duration-100 group-hover:w-full" />
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-orange-300 transition-all delay-100 duration-100 group-hover:h-full" />
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-gradient-to-r from-purple-600 to-orange-300 transition-all delay-200 duration-100 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-purple-600 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default AnimatedBtn;