import React from "react";

type Props = {
  name: string;
  onClick: (newTab: string) => void;
  isSelected: boolean;
};

const ProjectTab = ({ name, onClick, isSelected }: Props) => {
  const buttonStyles = isSelected
    ? "text-white border-blue-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTab;
