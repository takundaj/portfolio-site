"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#project" },
  { title: "Contact", path: "#contact" },
];

type Props = {};

export default function NavBar({}: Props) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          TAKUNDA
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              className="flex text-slate-200 items-center py-2 px-3 border-slate-200 rounded border hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              className="flex text-slate-200 items-center py-2 px-3 border-slate-200 rounded border hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className={`menu hidden md:block md:w-auto`} id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map(
              (link: { title: string; path: string }, index: number) => (
                <li>
                  <NavLink href={link.path} title={link.title} />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}
