"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Messaggio inviato! Ti contatteremo presto.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    { icon: <MapPin className="w-6 h-6" />, title: "Indirizzo", content: "Via Isonzo, 87\n02100 Rieti, RI" },
    { icon: <Phone className="w-6 h-6" />, title: "Telefono", content: "+39 320 4196 999" },
    { icon: <Mail className="w-6 h-6" />, title: "Email", content: "judorieti@virgilio.it" },
    { icon: <Clock className="w-6 h-6" />, title: "Orari", content: "Lun-Ven: 17:00-21:00\nSab: 9:00-12:00\nDom: Chiuso" }
  ];

  const schedules = [
    { day: "Lunedì", times: "18:00-19:00 Bambini | 19:00-20:30 Agonisti,Amatori" },
    { day: "Mercoledì", times: "17:30 Partenza per allenamento Regionale" },
    { day: "Giovedì", times: "18:00-19:00 Bambini | 19:00-20:30 Agonisti,Amatori" },
    { day: "Venerdì", times: "19:00 preparazione atletica Agonisti" },
    { day: "Sabato", times: "Allenamento Libero" }
  ];

  return (
    <section id="contatti" className="py-16 bg-gradient-to-br from-white via-judo-light to-[#3C69AE]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titolo sezione */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tight text-judo-dark">
            <span className="bg-gradient-to-r from-judo-amaranto to-[#3C69AE] bg-clip-text text-transparent">
              CONTATTACI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siamo qui per rispondere a tutte le tue domande e aiutarti a iniziare il tuo percorso nel judo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonna sinistra: info contatto + orari */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Dettagli contatti */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-hover transition-all duration-300 rounded-2xl bg-white/80 backdrop-blur-sm shadow-modern">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-[#3C69AE]/10 rounded-xl text-[#3C69AE]">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-bold text-judo-dark mb-2 tracking-wide">
                            {info.title.toUpperCase()}
                          </h3>
                          <p className="text-gray-600 text-sm whitespace-pre-line">{info.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Orari corsi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-modern rounded-2xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-display font-black text-judo-dark tracking-wide">
                    ORARI DEI CORSI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {schedules.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0">
                        <span className="font-medium text-judo-dark">{schedule.day}</span>
                        <span className="text-gray-600 text-sm text-right">{schedule.times}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Colonna destra: form + logo JR sotto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Form contatto */}
            <Card className="shadow-modern border-0 rounded-3xl bg-white/80 backdrop-blur-sm w-full mb-4">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-black text-judo-dark flex items-center tracking-wide">
                  <MessageCircle className="w-6 h-6 text-[#3C69AE] mr-2" />
                  INVIA UN MESSAGGIO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefono</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Il tuo numero"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="La tua email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Messaggio *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Raccontaci di te e dei tuoi obiettivi nel judo..."
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-[#3C69AE] hover:bg-[#3C69AE]/90 text-white border border-judo-amaranto font-display font-bold py-3 rounded-full shadow-modern hover:shadow-hover transition-all duration-300 tracking-wide"
                  >
                    Invia Messaggio
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Logo JR ridotto e leggermente alzato */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -18 }}
              whileInView={{ opacity: 1, scale: 1, y: -18 }}
              transition={{ duration: 0.8 }}
              className="w-full flex justify-center"
              style={{ marginTop: 'auto', alignSelf: 'stretch' }}
            >
              <Image
                src="/assets/src/JRmain.svg"
                alt="Logo Judo Rieti"
                width={2000}
                height={2000}
                className="mx-auto w-auto h-full max-h-[350px] object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
