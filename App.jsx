import React from 'react'
import { motion } from 'framer-motion'
import InteractiveCake from './components/InteractiveCake'
import HiddenQuest from './components/HiddenQuest'
import { MusicVisualizer, Timeline } from './components/Visuals'
import { TiltCard } from './components/TiltCard'

function App() {
  return (
    <div className="min-h-screen selection:bg-neon-cyan selection:text-slate-900 font-sans">
      <MusicVisualizer />
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-white rounded-full opacity-20 animate-pulse"
              style={{
                width: Math.random() * 3 + 'px',
                height: Math.random() * 3 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
            />
          ))}
        </div>

        <TiltCard>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-10 p-8"
          >
            <h1 className="text-6xl md:text-8xl font-serif mb-4 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Happy <span className="text-neon-cyan">Birthday</span>
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-slate-400">
              To someone truly extraordinary
            </p>
          </motion.div>
        </TiltCard>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-neon-cyan rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Cake Section */}
      <section className="bg-slate-900/30 py-20 flex justify-center">
        <TiltCard>
          <InteractiveCake />
        </TiltCard>
      </section>

      {/* Timeline Section */}
      <section>
        <Timeline />
      </section>

      {/* Quest Section */}
      <section className="pb-32 flex flex-col items-center">
        <h2 className="text-center text-2xl font-serif text-slate-500 mb-10">There is one more thing...</h2>
        <TiltCard>
           <HiddenQuest />
        </TiltCard>
      </section>

      <footer className="py-10 text-center border-t border-slate-900 text-slate-600 text-sm">
        <p>Made with ✨ by AI Assistant</p>
      </footer>
    </div>
  )
}

export default App
