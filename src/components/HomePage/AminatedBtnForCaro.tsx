'use client'

import React from "react";
import Link from "next/link";
import OutboundIcon from '@mui/icons-material/Outbound';

const AnimatedBtn = ({text, style, _route}) => {
  return (
    <div className= {style}>
        <Link href={_route}>
            <DrawOutlineButton> 
                <div className="flex gap-2">
                    <h1>{text}</h1>
                    <div><OutboundIcon className="text-purple-400"/></div>
                </div>
            </DrawOutlineButton>
        </Link>
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
      className="group relative px-4 py-1 font-medium transition-colors duration-[400ms] "
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