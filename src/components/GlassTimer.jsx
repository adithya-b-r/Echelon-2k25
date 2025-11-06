import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GlassTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeData = [
    { label: "DAYS", value: timeLeft.days, glow: "rgba(167,139,250,0.6)" },
    { label: "HOURS", value: timeLeft.hours, glow: "rgba(96,165,250,0.6)" },
    { label: "MINUTES", value: timeLeft.minutes, glow: "rgba(74,222,128,0.6)" },
    { label: "SECONDS", value: timeLeft.seconds, glow: "rgba(244,114,182,0.6)" },
  ];

  return (
    <div
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex items-center justify-center 
      gap-2 md:gap-4 p-2 md:p-4 rounded-2xl md:rounded-3xl  
      border border-[rgba(255,255,255,0.15)]
      shadow-[0_0_25px_rgba(255,255,255,0.05),inset_0_0_15px_rgba(255,255,255,0.05)] 
      text-white bg-[rgba(15,15,25,0.5)] backdrop-blur-2xl"
    >
      {timeData.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="relative flex flex-col items-center justify-center 
          w-[45px] h-[55px] md:w-[70px] md:h-[80px] 
          rounded-lg md:rounded-xl 
          border border-[rgba(255,255,255,0.15)]
          bg-[rgba(15,15,25,0.7)] backdrop-blur-2xl 
          shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] text-white"
          style={{
            boxShadow: `inset 0 0 10px rgba(255,255,255,0.05),
                        0 0 10px ${item.glow}`,
          }}
        >
          <motion.span
            key={item.value}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm md:text-2xl font-bold tracking-wider"
            style={{ color: item.glow }}
          >
            {item.value}
          </motion.span>
          <span className="text-[8px] md:text-[10px] mt-1 tracking-wider text-gray-300 font-semibold">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default GlassTimer;
