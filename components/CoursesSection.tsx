"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, Users, Target, Baby, User, Crown } from 'lucide-react';

export default function CoursesSection() {
  console.log("CoursesSection component rendered");

  const courses = [
    {
      title: "Judo Bambini",
      description: "Corso dedicato ai più piccoli per sviluppare coordinazione, disciplina e divertimento",
      age: "4-8 anni",
      schedule: "Lun-Mer 18:00-19:00",
      level: "Principiante",
      icon: <Baby className="w-6 h-6" />,
      features: ["Giochi motori", "Tecniche base", "Valori del judo", "Disciplina e rispetto"],
      color: "bg-[#3C69AE]"
    },
    {
      title: "Judo Agonisti",
      description: "Formazione tecnica completa per giovani judoka con ambizioni agonistiche",
      age: "9-14 anni",
      schedule: "Lun-Mer-Ven 19:00-20:30",
      level: "Intermedio/alto",
      icon: <User className="w-6 h-6" />,
      features: ["Tecniche avanzate", "Preparazione gare", "Kata tradizionali", "Condizionamento fisico"],
      color: "bg-judo-amaranto"
    },
    {
      title: "Judo Amatori",
      description: "Corso per adulti di tutti i livelli, dalla tecnica base al perfezionamento",
      age: "15+ anni",
      schedule: "Mar-Gio 19:00-20:30",
      level: "Tutti i livelli",
      icon: <Crown className="w-6 h-6" />,
      features: ["Autodifesa", "Fitness completo", "Tecniche tradizionali", "Filosofia del judo"],
      color: "bg-[#3C69AE]"
    }
  ];

  const scrollToContacts = () => {
    console.log("Scrolling to contacts section");
    const element = document.getElementById('contatti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="corsi" className="py-24 bg-gradient-to-br from-white via-judo-light to-[#3C69AE]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tight">
            <span className="block">
              I NOSTRI{' '}
              <span className="bg-gradient-to-r from-black to-[#3C69AE] bg-clip-text text-transparent">
                CORSI
              </span>
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Percorsi formativi strutturati per ogni età e livello, dalla prima cintura bianca al perfezionamento tecnico
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${course.color} rounded-full text-white mb-4 mx-auto`}>
                    {course.icon}
                  </div>
                  <CardTitle className="text-2xl font-display font-black text-judo-dark mb-2 tracking-wide">
                    {course.title.toUpperCase()}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 text-[#3C69AE] mr-3" />
                      <span className="font-medium">{course.age}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 text-[#3C69AE] mr-3" />
                      <span className="font-medium">{course.schedule}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Target className="w-5 h-5 text-[#3C69AE] mr-3" />
                      <Badge variant="secondary" className="bg-[#3C69AE]/10 text-[#3C69AE] rounded-full">
                        {course.level}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-judo-dark tracking-wide">PROGRAMMA:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-judo-amaranto rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pulsante “Prenota Lezione di Prova” */}
                  <Button 
                    onClick={scrollToContacts}
                    className="w-full bg-[#3C69AE] hover:bg-[#3C69AE]/90 text-white border border-judo-amaranto font-display font-bold rounded-full shadow-modern hover:shadow-hover transition-all duration-300 tracking-wide"
                  >
                    Prenota Lezione di Prova
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-judo-amaranto via-judo-dark to-[#3C69AE] text-white rounded-3xl p-12 md:p-16 shadow-glass"
        >
          <h3 className="text-3xl md:text-4xl font-display font-black mb-4 tracking-tight">
            PRIMA LEZIONE <span className="text-white">GRATUITA!</span>
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Vieni a conoscere il nostro dojo, i nostri maestri e scopri se il judo fa per te. 
            Nessun impegno, solo l'opportunità di iniziare un percorso straordinario.
          </p>

          {/* Pulsante CTA “Prenota Ora” con testo bianco */}
          <Button 
            onClick={scrollToContacts}
            size="lg"
            className="bg-[#3C69AE] hover:bg-[#3C69AE]/90 text-white border border-judo-amaranto font-display font-bold px-8 py-4 rounded-full shadow-modern hover:shadow-hover transition-all duration-300 tracking-wide"
          >
            Prenota Ora
          </Button>
        </motion.div>

        {/* Logo centrato e ingrandito */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-6"
        >
          <img 
            src="/assets/src/logocelesteoriz.svg" 
            alt="Logo Judo" 
            className="w-96 md:w-[500px] h-auto" // logo ingrandito
          />
        </motion.div>
      </div>
    </section>
  );
}
