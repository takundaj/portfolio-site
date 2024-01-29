import React from "react";

type Props = {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
};

export default function TabButton({ active, selectTab, children }: Props) {
  const buttonClasses = active
    ? "text-white border-b border-blue-500"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
}
