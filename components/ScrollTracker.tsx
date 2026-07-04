"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ScrollTracker() {
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggered) return;

      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 50) {
        toast.success("🔥 Đừng bỏ lỡ ưu đãi! Đăng ký ngay để nhận Voucher giảm trực tiếp 2.000.000 VNĐ.", {
          duration: 6000,
          icon: '🎁',
          style: {
            borderRadius: '12px',
            background: '#1e3a8a',
            color: '#fff',
            border: '1px solid #3b82f6',
            padding: '16px',
            fontWeight: 'bold'
          },
        });
        setHasTriggered(true); // Đảm bảo không bị spam toast khi cuộn lên cuộn xuống
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasTriggered]);

  return null; 
}