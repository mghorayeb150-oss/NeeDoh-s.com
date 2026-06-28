import React from 'react';
import { features } from '../data';
import { motion } from 'motion/react';

export function Features() {
  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-pink-500">Shop with Confidence</h2>
          <p className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for a stress-free experience
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are dedicated to providing the best selection of genuine NeeDoh products with top-tier customer service.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50 shadow-sm ring-1 ring-pink-100">
                  <feature.icon className="h-8 w-8 text-pink-500" aria-hidden="true" />
                </div>
                <dt className="text-xl font-bold leading-7 text-gray-900">
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
