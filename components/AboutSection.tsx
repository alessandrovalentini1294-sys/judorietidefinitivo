"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="chi-siamo"
      className="pt-8 pb-24 bg-gradient-to-br from-judo-amaranto via-judo-dark to-judo-amaranto/90 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CHI SIAMO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tight transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(60,105,174,0.8)]">
            CHI <span className="text-[#3C69AE]">SIAMO</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Più di una semplice palestra: siamo una vera famiglia unita dalla passione per il judo e dai suoi valori immortali. 
            Il nostro obiettivo non è solo formare atleti, ma persone migliori, capaci di affrontare le sfide quotidiane della vita.
          </p>
        </motion.div>

        {/* LA NOSTRA STORIA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Logo sinistro (Judo Celeste) */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <Image
                src="/assets/src/judoceleste.svg"
                alt="Logo Judo Celeste"
                width={2500}
                height={2500}
                className="w-[90%] md:w-[95%] h-auto"
              />
            </motion.div>
          </div>

          {/* Testo LA NOSTRA STORIA */}
          <div>
            <h3 className="text-3xl font-display font-black text-[#3C69AE] mb-6 tracking-tight transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(60,105,174,0.8)]">
              LA NOSTRA STORIA
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Fondato nel 2008, il nostro dojo nasce dalla passione e dalla dedizione di un gruppo di judoka esperti, 
                uniti dal desiderio di portare a Rieti l’autentica tradizione del judo giapponese.
              </p>
              <p>
                Nel corso degli anni abbiamo formato centinaia di atleti, accompagnandoli in un percorso di crescita sportiva 
                e personale. Alcuni hanno conquistato importanti traguardi a livello regionale e nazionale, 
                ma il nostro vero orgoglio sono tutte le persone che, grazie al judo, hanno imparato a credere in sé stesse, 
                a migliorarsi ogni giorno e a vivere secondo i valori di rispetto, disciplina e amicizia.
              </p>
            </div>
          </div>
        </motion.div>

        {/* LA FILOSOFIA DEL JUDO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Testo Filosofia */}
          <div>
            <h3 className="text-3xl font-display font-black text-white mb-6 tracking-wide transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
              LA FILOSOFIA DEL JUDO
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              La filosofia del judo si fonda sul rispetto reciproco, sulla ricerca del miglioramento personale 
              e sull’armonia tra corpo e mente. Ogni allenamento è un percorso di crescita, in cui si impara a 
              conoscere i propri limiti, a superarli e a trasformare la forza in equilibrio e controllo. 
              Il judo insegna che la vera vittoria non è battere l’avversario, ma diventare ogni giorno una 
              versione migliore di sé stessi, dentro e fuori dal tatami.
            </p>
          </div>

          {/* Logo Judo Bianco */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <Image
                src="/assets/src/jbianco.png"
                alt="Logo Judo Bianco"
                width={2500}
                height={2500}
                className="w-[90%] md:w-[95%] h-auto"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
