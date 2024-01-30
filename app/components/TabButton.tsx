import React from "react";
import { motion } from "framer-motion";

type Props = {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
};

const tabVariants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

export default function TabButton({ active, selectTab, children }: Props) {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={tabVariants}
        className="h-1 b-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
}
