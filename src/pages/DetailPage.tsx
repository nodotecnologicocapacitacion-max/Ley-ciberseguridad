import React from 'react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share } from 'lucide-react';

const ITEMS = [
  { id: 1, title: 'Ruta del Adobe', category: 'Turismo', image: 'https://placehold.co/600x400/eeeeee/999999?text=Ruta+del+Adobe', description: 'Un recorrido histórico por el oeste catamarqueño, conectando iglesias y casonas construidas con este material tradicional.' },
  { id: 2, title: 'Cuesta del Portezuelo', category: 'Paisajes', image: 'https://placehold.co/600x400/dddddd/666666?text=Cuesta+del+Portezuelo', description: 'Un camino sinuoso con vistas panorámicas espectaculares del Valle Central, famoso por su belleza inspiradora.' },
  { id: 3, title: 'Fiesta del Poncho', category: 'Cultura', image: 'https://placehold.co/600x400/cccccc/333333?text=Fiesta+del+Poncho', description: 'La fiesta de invierno más grande de Argentina, celebrando el trabajo artesanal y las raíces culturales de Catamarca.' },
];

export default function DetailPage() {
  const { id } = useParams();
  const item = ITEMS.find(i => i.id === Number(id)) || ITEMS[0];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white min-h-screen"
    >
      <div className="relative aspect-[4/5] w-full bg-neutral-100">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Top actions */}
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-gradient-to-b from-black/30 to-transparent">
          <Link to="/" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <Share size={20} />
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium">
            {item.category}
          </span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight mb-4">{item.title}</h1>
        <p className="text-neutral-600 leading-relaxed">
          {item.description}
        </p>
        
        <div className="mt-8 pt-8 border-t border-neutral-100">
          <h3 className="text-sm font-medium mb-4">Detalles adicionales</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-neutral-50 rounded-2xl">
              <p className="text-xs text-neutral-500 mb-1">Fecha</p>
              <p className="font-medium text-sm">Octubre 2023</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-2xl">
              <p className="text-xs text-neutral-500 mb-1">Autor</p>
              <p className="font-medium text-sm">Estudio Creativo</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
