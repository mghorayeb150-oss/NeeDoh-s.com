import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { products } from './data';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-pink-100 selection:text-pink-900">
      <Header cartCount={cartCount} />
      
      <main>
        <Hero />
        
        <section id="shop" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                  Featured NeeDohs
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Find your perfect squish. Great prices on all items.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAdd={handleAddToCart} 
                />
              ))}
            </div>
          </div>
        </section>

        <Features />
      </main>

      <Footer />
    </div>
  );
}
