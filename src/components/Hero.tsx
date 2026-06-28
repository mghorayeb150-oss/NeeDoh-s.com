import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-50 pt-16 sm:pt-24 lg:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            Squeeze the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Stress</span> Away
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Discover the ultimate collection of NeeDoh sensory toys. 
            Perfect for fidgeting, squishing, and finding your chill. 
            Great prices and secure checkout guaranteed.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#shop"
              className="rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-transform active:scale-95"
            >
              Shop Now
            </a>
            <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-translate-x-0 xl:left-0" aria-hidden="true">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
    </div>
  );
}
