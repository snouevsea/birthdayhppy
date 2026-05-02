import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Lock, Unlock, X } from 'lucide-react';

const HiddenQuest = () => {
  const [starsFound, setStarsFound] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const totalStars = 3;

  const handleStarClick = (id) => {
    if (!starsFound.includes(id)) {
      setStarsFound([...starsFound, id]);
    }
  };

  const allStarsFound = starsFound.length === totalStars;

  return (
    <div className="py-20 flex flex-col items-center">
      {/* Floating Stars */}
      {[...Array(totalStars)].map((_, i) => (
        !starsFound.includes(i) && (
          <motion.div
            key={i}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            initial={{ 
                x: Math.random() * 200 - 100, 
                y: Math.random() * 200 - 100,
                opacity: 0 
            }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.5, rotate: 180 }}
            onClick={() => handleStarClick(i)}
            className="fixed cursor-pointer z-50 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
            style={{ 
                top: `${20 + i * 30}%`, 
                left: i % 2 === 0 ? '10%' : '85%' 
            }}
          >
            <Star fill="currentColor" size={32} />
          </motion.div>
        )
      ))}

      {/* The Box */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        onClick={() => allStarsFound && setIsOpen(true)}
        className={`relative w-48 h-48 flex items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-500 cursor-pointer
          ${allStarsFound 
            ? 'border-neon-cyan shadow-[0_0_30px_rgba(0,255,255,0.4)] bg-slate-900/50' 
            : 'border-slate-700 bg-slate-900/20'}`}
      >
        <div className="text-center">
          {allStarsFound ? (
            <Unlock className="mx-auto text-neon-cyan mb-2" size={48} />
          ) : (
            <Lock className="mx-auto text-slate-600 mb-2" size={48} />
          )}
          <p className="text-sm uppercase tracking-tighter text-slate-400">
            {allStarsFound ? "Unlock Message" : `Find ${totalStars - starsFound.length} more stars`}
          </p>
        </div>
      </motion.div>

      {/* Secret Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-lg w-full bg-slate-900 border border-neon-cyan p-8 rounded-3xl shadow-[0_0_50px_rgba(0,255,255,0.3)]"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <h2 className="text-3xl font-serif text-neon-cyan mb-6">A Secret Message</h2>
              <div className="space-y-4 text-lg leading-relaxed text-slate-300 font-light italic">
                <p>"Thank you for living until today."</p>
                <p>
                  Every day you exist, the world becomes a bit more colorful. 
                  Thank you for your resilience, your laughter, and the quiet 
                  strength you carry. You are more loved than you know, and 
                  more important than you can imagine.
                </p>
                <p>Stay as wonderful as you are.</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HiddenQuest;
