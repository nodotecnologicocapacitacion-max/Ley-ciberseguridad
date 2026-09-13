import React from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

const CATEGORIES = [
  { id: 1, name: 'Fotografía', count: '1.2k' },
  { id: 2, name: 'Diseño 3D', count: '850' },
  { id: 3, name: 'Ilustración', count: '2.4k' },
  { id: 4, name: 'Tipografía', count: '430' },
];

export default function ExplorePage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-6"
    >
      <header className="mb-6 mt-4">
        <h1 className="text-2xl font-semibold tracking-tight">Buscar</h1>
      </header>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
        <input 
          type="text" 
          placeholder="Buscar inspiración..." 
          className="w-full bg-neutral-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-neutral-200 transition-all text-sm"
        />
      </div>

      <div>
        <h2 className="text-sm font-medium text-neutral-500 mb-4">Categorías populares</h2>
        <div className="grid grid-cols-2 gap-3">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="p-4 bg-white border border-neutral-100 rounded-2xl flex flex-col justify-between aspect-square hover:border-neutral-300 transition-colors cursor-pointer">
              <span className="text-sm font-medium">{cat.name}</span>
              <span className="text-xs text-neutral-400">{cat.count} posts</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
