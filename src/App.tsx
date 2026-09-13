import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Compass, User } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import ProfilePage from './pages/ProfilePage';
import DetailPage from './pages/DetailPage';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/details/:id" element={<DetailPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-200">
        <main className="flex-1 w-full max-w-md mx-auto bg-white shadow-xl relative overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto pb-20">
            <AnimatedRoutes />
          </div>
          
          {/* Bottom Navigation */}
          <nav className="absolute bottom-0 w-full bg-white border-t border-neutral-100 px-6 py-4 flex justify-between items-center z-50">
            <Link to="/" className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors">
              <Home size={24} />
              <span className="text-[10px] font-medium">Inicio</span>
            </Link>
            <Link to="/explore" className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors">
              <Compass size={24} />
              <span className="text-[10px] font-medium">Explorar</span>
            </Link>
            <Link to="/profile" className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors">
              <User size={24} />
              <span className="text-[10px] font-medium">Perfil</span>
            </Link>
          </nav>
        </main>
      </div>
    </BrowserRouter>
  );
}
