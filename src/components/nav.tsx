// @NOTE: in case you are using Next.js
"use client";

import { useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedTabsProps = {
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
};

export function Navbar({
  containerClassName,
  activeTabClassName,
  tabClassName,
}: AnimatedTabsProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const tabs = [
    {
      path: "/",
      title: "home",
    },
    {
      path: "/projectos",
      title: "projectos",
    },
    {
      path: "/tecnologias",
      title: "tecnologias",
    },
    // {
    //   path: "/blog",
    //   title: "blog",
    // },
    {
      path: "/talktome",
      title: "talk to me",
    },
  ];

  return (
    <div
      className={cn(
        "relative flex flex-wrap items-center justify-center",
        containerClassName
      )}
    >
      {tabs.map((tab, index) => (
        <Link
          key={tab.title}
          href={tab.path}
          onClick={() => setActiveIdx(index)}
          className={cn(
            "group relative z-[1] rounded-full px-4 py-2",
            { "z-0": activeIdx === index },
            tabClassName
          )}
        >
          {activeIdx === index && (
            <motion.div
              layoutId="clicked-button"
              transition={{ duration: 0.2 }}
              className={cn(
                "absolute inset-0 rounded-full bg-white",
                activeTabClassName
              )}
            />
          )}

          <span
            className={cn(
              "relative text-sm block font-medium duration-200",
              activeIdx === index ? "text-black delay-100" : "text-white"
            )}
          >
            {tab.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
