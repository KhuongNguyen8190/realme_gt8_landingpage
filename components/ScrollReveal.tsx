"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: direction === "up" ? 40 : 0,
        x: direction === "left" ? -40 : direction === "right" ? 40 : 0 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      // amount: 0.1 nghĩa là chỉ cần 10% phần tử xuất hiện trên màn hình là hiệu ứng sẽ chạy ngay
      viewport={{ once: true, amount: 0.1 }} 
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}