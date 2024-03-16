"use client";

import { TypewriterEffectSmooth } from "./typewriter-effect";

export function IndexTypeEffect() {
  const words = [
    {
      text: "Hello !",
      className: "text-yellow-500 dark:text-yello-500 break-normal",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">    
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
