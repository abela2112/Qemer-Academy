"use client";

import { useConfettiStore } from "@/hooks/use-confetti-store";
import React from "react";
import ReactConfetti from "react-confetti";
type Props = {};

const ConfettiProvider = (props: Props) => {
  const confetti = useConfettiStore();
  if (!confetti.isOpen) return null;
  return (
    <ReactConfetti
      className="pointer-events-none z-[100]"
      numberOfPieces={5500}
      recycle={false}
      onConfettiComplete={() => {
        confetti.onClose();
      }}
    />
  );
};

export default ConfettiProvider;
