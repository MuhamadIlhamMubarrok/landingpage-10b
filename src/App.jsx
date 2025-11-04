import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#141813] text-[#DADAD0] px-6 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B21617]/10 via-transparent to-[#B21617]/5 blur-3xl"></div>

      {/* Title */}
      <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="font-[hanson-bold] text-5xl md:text-7xl tracking-widest text-[#B21617] drop-shadow-lg z-10">
        10 B CLASS
      </motion.h1>

      {/* Slogan */}
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }} className="mt-4 text-base md:text-lg text-[#DADAD0]/80 italic z-10">
        “We Are Stronger Together”
      </motion.p>

      {/* Subtitle */}
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }} className="mt-6 text-lg md:text-2xl text-[#DADAD0]/80 z-10">
        Futuristic. United. Coming Soon.
      </motion.p>

      {/* Countdown */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="mt-10 flex gap-6 text-[#DADAD0]/90 z-10">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-5xl font-[hanson-bold] text-[#B21617]">{String(item.value).padStart(2, "0")}</div>
            <div className="text-xs md:text-sm uppercase tracking-widest mt-1">{item.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-6 text-xs md:text-sm text-[#DADAD0]/60">
        © 2025 Kelas 10B — All Rights Reserved
      </motion.footer>

      {/* Decorative Elements */}
      <div className="absolute w-72 h-72 bg-[#B21617]/10 rounded-full blur-3xl bottom-[-10%] right-[-10%]"></div>
      <div className="absolute w-64 h-64 bg-[#B21617]/10 rounded-full blur-3xl top-[-10%] left-[-10%]"></div>
    </div>
  );
};

export default ComingSoon;
