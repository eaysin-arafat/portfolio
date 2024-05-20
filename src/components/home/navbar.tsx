"use client";

import { links } from "@/data/navlinks";
import useScrollSection from "@/hooks/useSectionScroll";
import { styles } from "@/utils/cn";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const { scrolled, currentSection } = useScrollSection();

  const navRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (navRef.current && !navRef.current.contains(target)) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openNav]);

  return (
    <div
      className={styles(
        "fixed md:flex justify-between w-full z-20 transition duration-300 ease-in-out py-1.5 md:py-1.5",
        {
          "bg-white border-b shadow-sm": scrolled,
          "bg-transparent border-none shadow-none": !scrolled,
        }
      )}
      ref={navRef}
    >
      <div className="px-5 2xl:pl-80 flex justify-between items-center py-2.5">
        <Link
          href="/"
          className="text-lg font-extrabold whitespace-nowrap text-black"
        >
          Eaysin Arafat
        </Link>

        <button
          className="md:hidden"
          onClick={() => setOpenNav((prevState) => !prevState)}
        >
          <BiMenu size={25} className="text-orangeColor" />
        </button>
      </div>

      <nav
        className={styles(
          "overflow-hidden transition-all duration-300 ease-in-out bg-white md:bg-inherit flex items-center md:py-5",
          {
            "max-h-96": openNav,
            "max-h-0 md:max-h-full": !openNav,
            "border-b shadow-sm": openNav && !scrolled,
          }
        )}
      >
        <ul className="px-5 2xl:pr-80 py-8 md:py-0 text-[13px] text-black font-bold uppercase flex flex-col md:flex-row gap-8">
          {links?.map((link, index) => (
            <li key={index} onClick={() => setOpenNav(false)}>
              <a
                className={styles(
                  "nav whitespace-nowrap border-b-2 border-transparent pb-[2px]",
                  {
                    "border-b-2 !border-orangeColor":
                      currentSection == link?.url,
                  }
                )}
                href={`#${link?.url}`}
              >
                {link?.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
