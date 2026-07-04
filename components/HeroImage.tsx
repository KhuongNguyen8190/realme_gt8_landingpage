"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroImage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <motion.div 
      style={{ y }} 
      className="lg:col-span-5 relative w-full aspect-square max-w-[500px] mx-auto z-20"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse -z-10"></div>
      
      <Image 
        src="/images/realme-gt8-hero.png"
        alt="Realme GT8 Điện thoại Gaming"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
      />
    </motion.div>
  );
}