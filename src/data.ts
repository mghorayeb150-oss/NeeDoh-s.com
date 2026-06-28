import { ShoppingCart, ShieldCheck, Truck, Tag, Menu, X, Star } from 'lucide-react';
import { useState } from 'react';

export const products = [
  {
    id: '1',
    name: 'NeeDoh Classic',
    description: 'The original squishy, stretchy, satisfying sensory ball. Gives your hands something to do and your mind a moment to chill.',
    price: 3.99,
    rating: 4.8,
    color: 'bg-pink-400',
  },
  {
    id: '2',
    name: 'Teenie NeeDoh',
    description: 'A 3-pack of teenie tiny NeeDohs. Perfect for taking on the go and squeezing with your fingertips.',
    price: 4.99,
    rating: 4.9,
    color: 'bg-green-400',
  },
  {
    id: '3',
    name: 'Cool Cats NeeDoh',
    description: 'Feline groovy? These cat-shaped NeeDohs are purrfectly squishable and adorable.',
    price: 4.99,
    rating: 4.7,
    color: 'bg-orange-400',
  },
  {
    id: '4',
    name: 'Color Change NeeDoh',
    description: 'Squeeze it and watch the color transform before your eyes! Double the visual satisfaction.',
    price: 5.99,
    rating: 4.6,
    color: 'bg-purple-500',
  },
  {
    id: '5',
    name: 'Mac N Squeeze NeeDoh',
    description: 'Hollow, neon-colored noodles you can stretch and squish. The ultimate tactile noodle experience.',
    price: 5.99,
    rating: 4.5,
    color: 'bg-yellow-400',
  },
  {
    id: '6',
    name: 'Crystal NeeDoh',
    description: 'A translucent NeeDoh that looks like a glittering gem, but feels like a satisfying squish.',
    price: 4.99,
    rating: 4.8,
    color: 'bg-cyan-400',
  },
];

export const features = [
  {
    icon: Tag,
    title: 'Great Prices',
    description: 'We offer the best deals on all your favorite sensory toys.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    description: 'Your transactions are protected with industry-leading security.',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Get your squishy goodness delivered quickly to your door.',
  },
];
