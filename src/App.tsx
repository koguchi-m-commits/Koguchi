/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart, Music, PartyPopper, MapPin, Cake, Sparkles } from "lucide-react";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-rose-200">
      {/* Hero Section */}
      <header className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-rose-100">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm text-rose-500 text-sm font-semibold mb-4 shadow-sm"
          >
            Hello, World!
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900"
          >
            高口 美結
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-2 text-xl text-stone-600 font-medium"
          >
            MIYU KOGUCHI
          </motion.p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Profile Card */}
          <motion.section variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-rose-50 rounded-xl text-rose-500">
                <Sparkles size={24} />
              </div>
              <h2 className="text-2xl font-bold">自己紹介</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-stone-500 text-sm uppercase tracking-wider font-semibold mb-1">Nickname</p>
                <p className="text-2xl font-medium text-rose-600">グッチ <span className="text-lg text-stone-400 font-normal">(^_-)-☆</span></p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-stone-400"><Cake size={20} /></div>
                <div>
                  <p className="text-stone-500 text-sm font-semibold">Birthday</p>
                  <p className="text-lg">2002年08月07日</p>
                  <p className="text-sm text-stone-400 italic">のび太と同じ誕生日です！</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-stone-400"><MapPin size={20} /></div>
                <div>
                  <p className="text-stone-500 text-sm font-semibold">Hometown</p>
                  <p className="text-lg">でっかいどう (北海道) 出身！</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Hobbies & Skills */}
          <motion.section variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 rounded-xl text-amber-500">
                  <Music size={24} />
                </div>
                <h2 className="text-2xl font-bold">趣味・特技</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-amber-400"><Music size={20} /></div>
                  <div>
                    <p className="text-stone-500 text-sm font-semibold">Hobby</p>
                    <p className="text-lg font-medium">HIPHOPダンス</p>
                    <p className="text-stone-600">リズムに乗るのが大好きです！</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-amber-400"><PartyPopper size={20} /></div>
                  <div>
                    <p className="text-stone-500 text-sm font-semibold">Specialty</p>
                    <p className="text-lg font-medium">盛り上げ役</p>
                    <p className="text-stone-600">みんなを笑顔にするのが得意です♪</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-50">
              <p className="text-stone-400 text-sm italic">
                「よろしくお願いします！！」
              </p>
            </div>
          </motion.section>
        </motion.div>

        {/* Decorative Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 text-stone-400 text-sm">
            <span>Made with</span>
            <Heart size={14} className="text-rose-400 fill-rose-400" />
            <span>by Miyu Koguchi</span>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
