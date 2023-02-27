import Link from "next/link";
import React from "react";

interface Props {
  onClick: () => void;
  className?: String;
}

function LearnMoreButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-1 my-4 transition duration-200 ease-in-out border-2 rounded-full border-primary w-fit hover:bg-primary text-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
    >
      <span className="text-sm">Learn More</span>
    </button>
  );
}

export default LearnMoreButton;
