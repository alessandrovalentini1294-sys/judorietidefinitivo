"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";

export default function EventSection() {
  const events = [
    {
      title: "Campionato Regionale",
      date: "12 Maggio 2025",
      description: "Evento di judo con partecipazione di tutte le categorie.",
      image: "/events/campionato-regionale.png",
    },
    {
      title: "Seminario Tecnico",
      date: "22 Giugno 2025",
      description: "Seminario con istruttori nazionali e internazionale.",
      image: "/events/seminario-tecnico.png",
    },
    {
      title: "Giornata Porte Aperte",
      date: "5 Settembre 2025",
      description: "Invitiamo tutti a scoprire il nostro dojo e provare il judo.",
      image: "/events/porte-aperte.png",
    },
    {
      title: "Torneo Giovanile",
      date: "18 Ottobre 2025",
      description: "Competizione per i più giovani del nostro dojo e regioni vicine.",
      image: "/events/torneo-giovanile.png",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-judo-light via-white to-[#3C69AE]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titolo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tight">
            <span className="block">
              <span className="bg-gradient-to-r from-judo-amaranto to-black bg-clip-text text-transparent">PROGRAMMA </span>
              <span className="bg-gradient-to-r from-black to-[#3C69AE] bg-clip-text text-transparent">EVENTI</span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri tutti i nostri eventi: stage, tornei e giornate speciali nel nostro dojo.
          </p>
        </motion.div>

        {/* Lista eventi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-sm shadow-lg border-4 border-transparent transition-transform duration-500 hover:-translate-y-2 group">
                <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-br from-judo-amaranto to-[#3C69AE]">
                  <div className="absolute inset-[3px] rounded-3xl bg-white/90"></div>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl m-[6px]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-display font-bold text-black mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
