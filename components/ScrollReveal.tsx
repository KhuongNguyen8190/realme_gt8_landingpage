"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function ScrollReveal({ children, delay = 0, direction = "up" }: ScrollRevealProps) {
  const [forceShowMobile, setForceShowMobile] = useState(false);

  useEffect(() => {
    // Nhận diện thiết bị di động. Nếu là mobile, ta bật cờ ép hiển thị.
    if (window.innerWidth < 768) {
      setForceShowMobile(true);
    }
  }, []);

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: direction === "up" ? 30 : 0,
        x: direction === "left" ? -30 : direction === "right" ? 30 : 0 
      }}
      // CỨU CÁNH: Nếu là Mobile, ghi đè lệnh animate để hiện chữ lập tức, tránh bị kẹt tàng hình
      animate={forceShowMobile ? { opacity: 1, y: 0, x: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}