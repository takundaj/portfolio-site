import React from "react";
import NavLink from "./NavLink";

type Props = {
  links: { path: string; title: string }[];
};

export default function MenuOverlay({ links }: Props) {
  return (
    <ul className="flex flex-col items-center py-4 md:hidden">
      {links.map((link: { path: string; title: string }, index: number) => (
        <li key={index}>
          <NavLink title={link.title} href={link.path} />
        </li>
      ))}
    </ul>
  );
}
