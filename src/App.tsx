/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart, Music, PartyPopper, MapPin, Cake, Sparkles, Palmtree, Sun, Waves } from "lucide-react";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-orange-500/30 overflow-x-hidden">
      {/* LA Sunset Background Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 via-pink-500/10 to-transparent opacity-50" />
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-video opacity-20"
        >
          <img
            src="https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?q=80&w=2070&auto=format&fit=crop"
            alt="LA Skyline"
            className="w-full h-full object-cover rounded-[4rem]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Palmtree className="text-orange-400" size={32} />
            <span className="text-orange-400 font-bold tracking-[0.3em] uppercase text-sm">West Coast Vibe</span>
            <Palmtree className="text-orange-400" size={32} />
          </motion.div>

          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-none"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
              MIYU
            </span>
            <span className="block -mt-4 md:-mt-8">KOGUCHI</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <span className="px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-bold uppercase tracking-widest">
              Dancer
            </span>
            <span className="px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-bold uppercase tracking-widest">
              Mood Maker
            </span>
            <span className="px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-bold uppercase tracking-widest">
              Hokkaido → LA
            </span>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <Waves size={32} />
        </motion.div>
      </header>

      {/* Content Grid */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Profile Section */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sun size={120} />
            </div>
            
            <h2 className="text-4xl font-black uppercase italic mb-8 flex items-center gap-3">
              <Sparkles className="text-orange-400" />
              Who is MIYU?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="text-orange-400 text-xs font-black uppercase tracking-widest block mb-2">Nickname</label>
                  <p className="text-5xl font-black italic">グッチ <span className="text-2xl not-italic text-pink-500">^_-☆</span></p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-400">
                    <Cake size={24} />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-bold uppercase tracking-widest block">Birthday</label>
                    <p className="text-xl font-bold">2002.08.07</p>
                    <p className="text-xs text-orange-400/60 font-medium italic">Same as Nobita!</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-bold uppercase tracking-widest block">From</label>
                    <p className="text-xl font-bold">でっかいどう (Hokkaido)</p>
                    <p className="text-xs text-blue-400/60 font-medium italic">The Great North</p>
                  </div>
                </div>
                <div className="p-6 rounded-3xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 border border-white/5">
                  <p className="text-sm leading-relaxed font-medium">
                    LAの太陽のように明るく、周りを照らす盛り上げ役！<br/>
                    ダンスで培ったリズム感とパッションで、どこでも最高の雰囲気を作ります♪
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hobby Section */}
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden bg-gradient-to-b from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-4xl font-black uppercase italic mb-8">Passions</h2>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Music className="text-pink-500" />
                    <span className="text-xl font-black italic uppercase">HIPHOP Dance</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-pink-500 to-orange-500" 
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <PartyPopper className="text-orange-400" />
                    <span className="text-xl font-black italic uppercase">Mood Maker</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-orange-500 to-yellow-400" 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-2xl font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">
                Let's Party!!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-white/20 text-xs font-black uppercase tracking-[0.5em] mb-4">
            よろしくお願いします！！
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest">
            <span>Made with</span>
            <Heart size={12} className="text-pink-500 fill-pink-500" />
            <span>in West Coast Style</span>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
