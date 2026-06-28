import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-orange-400 font-bold text-white">
              N
            </div>
            <span className="text-xl font-black tracking-tight text-gray-900">NeeDoh Shop</span>
          </div>
          <p className="text-sm text-gray-500 max-w-sm">
            Your premium destination for the best sensory and fidget toys. Keep calm and squeeze on.
          </p>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} NeeDoh Shop. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
