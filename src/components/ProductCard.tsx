import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    color: string;
  };
  onAdd: () => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group flex flex-col rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 overflow-hidden hover:shadow-lg transition-all"
    >
      <div className={`aspect-square w-full p-8 flex items-center justify-center ${product.color} bg-opacity-20 relative overflow-hidden`}>
        {/* Abstract product representation */}
        <motion.div 
          className={`w-32 h-32 rounded-full ${product.color} shadow-xl mix-blend-multiply`}
          whileHover={{ scale: 1.1, borderRadius: ["50%", "40% 60% 70% 30% / 40% 50% 60% 50%", "50%"] }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>
      
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
          <p className="text-lg font-black text-pink-500">${product.price}</p>
        </div>
        
        <div className="flex items-center gap-1 mb-3">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-gray-600">{product.rating}</span>
        </div>
        
        <p className="text-sm text-gray-500 flex-1">{product.description}</p>
        
        <button 
          onClick={onAdd}
          className="mt-6 w-full rounded-2xl bg-gray-900 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors active:scale-[0.98]"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
