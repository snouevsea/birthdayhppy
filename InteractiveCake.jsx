import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const InteractiveCake = () => {
  const [lit, setLit] = useState(false);
  const [blown, setBlown] = useState(false);

  const handleCandleClick = () => {
    if (!lit && !blown) {
      setLit(true);
    } else if (lit) {
      setLit(false);
      setBlown(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00ffff', '#bc13fe', '#ffffff']
      });
      setTimeout(() => setBlown(false), 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 relative">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="relative cursor-pointer"
        onClick={handleCandleClick}
      >
        {/* Cake Base */}
        <div className="w-64 h-32 bg-slate-800 rounded-t-3xl border-b-8 border-slate-900 shadow-[0_0_20px_rgba(0,255,255,0.2)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            <div className="w-full h-4 bg-neon-cyan/20 absolute top-10"></div>
            <div className="w-full h-4 bg-neon-purple/20 absolute top-20"></div>
        </div>
        
        {/* Candles */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative w-3 h-12 bg-neon-purple rounded-full">
              <AnimatePresence>
                {lit && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 0.5 }}
                    className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-8 bg-orange-500 rounded-full blur-[2px] shadow-[0_0_15px_#f97316]"
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-4 bg-yellow-300 rounded-full"></div>
                  </motion.div>
                )}
                {blown && (
                    <motion.div 
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 0, y: -20 }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 text-slate-400"
                    >
                        ☁️
                    </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
      
      <div className="mt-8 text-center">
        <p className="text-neon-cyan font-serif text-xl tracking-widest uppercase">
          {!lit && !blown ? "Light the candles" : lit ? "Make a wish and blow!" : "Happy Birthday!"}
        </p>
      </div>
    </div>
  );
};

export default InteractiveCake;
