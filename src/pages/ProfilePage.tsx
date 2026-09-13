import React from 'react';
import { motion } from 'motion/react';
import { Settings, Bookmark, Grid } from 'lucide-react';

export default function ProfilePage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-6"
    >
      <header className="flex justify-between items-center mb-8 mt-4">
        <h1 className="text-2xl font-semibold tracking-tight">Perfil</h1>
        <button className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors">
          <Settings size={20} className="text-neutral-700" />
        </button>
      </header>

      <div className="flex flex-col items-center mb-10">
        <div className="w-24 h-24 bg-neutral-200 rounded-full mb-4 overflow-hidden">
          <img src="https://placehold.co/400x400/dddddd/999999?text=U" alt="User Avatar" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-xl font-medium">Usuario Demo</h2>
        <p className="text-neutral-500 text-sm mt-1">Amante del diseño minimalista</p>
      </div>

      <div className="flex bg-neutral-100 p-1 rounded-2xl mb-6">
        <button className="flex-1 py-2.5 bg-white shadow-sm rounded-xl text-sm font-medium flex items-center justify-center gap-2">
          <Grid size={16} />
          <span>Posts</span>
        </button>
        <button className="flex-1 py-2.5 text-neutral-500 text-sm font-medium flex items-center justify-center gap-2 hover:text-neutral-900 transition-colors">
          <Bookmark size={16} />
          <span>Guardados</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-1">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square bg-neutral-100">
             <img src={`https://placehold.co/300x300/eeeeee/cccccc?text=${i}`} alt="Gallery item" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
