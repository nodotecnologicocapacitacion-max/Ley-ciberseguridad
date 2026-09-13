import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const ITEMS = [
  { id: 1, title: 'Ruta del Adobe', category: 'Turismo', image: 'https://placehold.co/600x400/eeeeee/999999?text=Ruta+del+Adobe' },
  { id: 2, title: 'Cuesta del Portezuelo', category: 'Paisajes', image: 'https://placehold.co/600x400/dddddd/666666?text=Cuesta+del+Portezuelo' },
  { id: 3, title: 'Fiesta del Poncho', category: 'Cultura', image: 'https://placehold.co/600x400/cccccc/333333?text=Fiesta+del+Poncho' },
];

export default function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-6"
    >
      <header className="mb-8 mt-4 flex flex-col items-center text-center">
        <div className="w-40 h-40 mb-6 drop-shadow-md">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Escudo_de_la_Provincia_de_Catamarca.svg" 
            alt="Escudo de Catamarca" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Catamarca</h1>
        <p className="text-neutral-500 text-sm mt-2 max-w-[250px]">Explora la provincia, su cultura y sus paisajes.</p>
      </header>

      <div className="flex flex-col gap-6">
        {ITEMS.map((item) => (
          <Link key={item.id} to={`/details/${item.id}`} className="group block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-neutral-100">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-500 mb-1">{item.category}</p>
              <h3 className="text-lg font-medium">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
