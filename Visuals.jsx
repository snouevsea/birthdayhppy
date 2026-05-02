import React from 'react';
import { motion } from 'framer-motion';

export const MusicVisualizer = () => {
  return (
    <div className="fixed top-6 right-6 flex items-end gap-1 h-8 group cursor-pointer bg-slate-900/50 p-3 rounded-full backdrop-blur-md border border-slate-800">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ height: [8, 24, 12, 20, 8] }}
          transition={{ 
            repeat: Infinity, 
            duration: 0.8, 
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          className="w-1 bg-neon-cyan rounded-full"
        />
      ))}
      <span className="ml-2 text-[10px] text-slate-400 uppercase tracking-widest hidden group-hover:block">Now Playing</span>
    </div>
  );
};

export const Timeline = () => {
  const memories = [
    { year: "The Beginning", title: "When We Met", desc: "A spark that changed everything." },
    { year: "2023", title: "Summer Adventures", desc: "Sunsets and endless laughter." },
    { year: "2024", title: "Growing Together", desc: "Through every high and low." },
    { year: "Today", title: "Your Special Day", desc: "Celebrating the incredible person you are." }
  ];

  return (
    <div className="py-20 max-w-2xl mx-auto px-6">
      <h2 className="text-4xl font-serif text-center mb-16 text-neon-purple shadow-neon-purple">Timeline of Us</h2>
      <div className="relative border-l-2 border-neon-cyan/30 ml-4">
        {memories.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="mb-12 ml-8 relative"
          >
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-neon-cyan shadow-[0_0_10px_#00ffff]" />
            <span className="text-neon-cyan text-sm font-mono">{m.year}</span>
            <h3 className="text-xl font-semibold mt-1">{m.title}</h3>
            <p className="text-slate-400 mt-2 font-light">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
