import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent">
      <div className="container p-12 flex justify-between">
        <span>TAKUNDA</span>
        <p className="text-secondary-600 ">All rights reserved.</p>
      </div>
    </footer>
  );
}
