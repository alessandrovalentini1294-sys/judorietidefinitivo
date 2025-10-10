"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Star, Users, Trophy } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-judo-light via-white to-judo-celeste/10 pt-28 sm:pt-32 md:pt-40 pb-32"
    >
      {/* Background shapes */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230EA5E9%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] 
          opacity-50"
        ></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-judo-celeste/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-judo-amaranto/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo Heroic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-14"
          >
            <div className="mx-auto mb-6 w-72 h-72 sm:w-80 sm:h-80 md:w-80 md:h-80">
              <img
                src="/assets/src/logoceleste.svg"
                alt="Judo Rieti Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black mb-8 tracking-tight">
            <span className="block">
              <span className="bg-gradient-to-r from-judo-amaranto to-black bg-clip-text text-transparent">
                SCOPRI IL{' '}
              </span>
              <span className="text-black">JUDO </span>
              <span className="bg-gradient-to-r from-black to-[#3C69AE] bg-clip-text text-transparent">
                A RIETI
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Unisciti alla nostra famiglia e inizia un viaggio di crescita personale, disciplina e rispetto. 
            Per bambini, giovani e adulti di tutte le età.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={() => scrollToSection('corsi')}
              size="lg"
              className="bg-judo-amaranto hover:bg-judo-amaranto/90 text-white font-display font-bold px-8 py-4 text-lg group rounded-full shadow-modern hover:shadow-hover transition-all duration-300 tracking-wide"
            >
              Scopri i Corsi
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>

            <Button
  onClick={() => scrollToSection('contatti')}
  variant="outline"
  size="lg"
  className="border-2 border-[#3C69AE] text-white bg-[#3C69AE] hover:bg-white hover:text-[#3C69AE] font-display font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 tracking-wide"
>
  Prova Gratuita
</Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-glass hover:shadow-hover transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-judo-amaranto/10 rounded-2xl mb-4">
                <Users className="text-judo-amaranto" size={28} />
              </div>
              <div className="text-3xl font-display font-black text-judo-dark mb-2">15+</div>
              <div className="text-gray-600 font-medium">Anni di Esperienza</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-glass hover:shadow-hover transition-all duration-300">
  <div className="inline-flex items-center justify-center w-16 h-16 bg-judo-celeste/10 rounded-2xl mb-4">
    <Trophy style={{ color: '#3C69AE' }} size={28} />
  </div>
  <div className="text-3xl font-display font-black text-judo-dark mb-2">200+</div>
  <div className="text-gray-600 font-medium">Atleti Formati</div>
</div>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-glass hover:shadow-hover transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-judo-amaranto/10 rounded-2xl mb-4">
                <Star className="text-judo-amaranto" size={28} />
              </div>
              <div className="text-3xl font-display font-black text-judo-dark mb-2">25+</div>
              <div className="text-gray-600 font-medium">Gare Vinte</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-judo-celeste rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
            <div className="w-1 h-3 bg-judo-celeste rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

