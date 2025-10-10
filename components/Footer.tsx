import { MapPin, Phone, Mail, Heart, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-judo-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid principale super compatta */}
        <div className="py-2 md:py-3 grid grid-cols-1 md:grid-cols-4 gap-1.5 md:gap-2">
          {/* Colonna sinistra */}
          <div className="col-span-2 flex flex-col justify-between h-full space-y-1">
            <div className="flex items-center mb-1">
              <img 
                src="/assets/src/logo3bianco.svg" 
                alt="Logo Judo Rieti" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Da oltre 15 anni formiamo campioni di judo e, soprattutto, persone migliori.
            </p>
            <p className="text-gray-300 text-xs leading-snug">
              道場 (Dōjō) significa “luogo di allenamento”, dove corpo e mente crescono insieme.
            </p>
            <p className="text-gray-300 text-xs leading-snug">
              柔道 (Jūdō) è “la via della cedevolezza”, l’arte di usare la forza con equilibrio e rispetto.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Unisciti alla nostra famiglia e scopri il Judo a 360°.
            </p>
          </div>

          {/* Colonna destra */}
          <div className="col-span-2 flex flex-col justify-between h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2">
              {/* Quick Links */}
              <div>
                <h4 className="text-white font-display font-bold text-lg sm:text-xl mb-1 tracking-wide">LINK RAPIDI</h4>
                <ul className="space-y-0.5 text-sm">
                  <li><a href="#home" className="text-gray-300 hover:text-[#3C69AE] transition-colors">Home</a></li>
                  <li><a href="#corsi" className="text-gray-300 hover:text-[#3C69AE] transition-colors">I Nostri Corsi</a></li>
                  <li><a href="#chi-siamo" className="text-gray-300 hover:text-[#3C69AE] transition-colors">Chi Siamo</a></li>
                  <li><a href="#eventi" className="text-gray-300 hover:text-[#3C69AE] transition-colors">Eventi</a></li>
                  <li><a href="#contatti" className="text-gray-300 hover:text-[#3C69AE] transition-colors">Contatti</a></li>
                </ul>
              </div>

              {/* Contatti */}
              <div>
                <h4 className="text-white font-display font-bold text-lg sm:text-xl mb-1 tracking-wide">CONTATTI</h4>
                <div className="space-y-0.5 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-[#3C69AE] mt-1" />
                    <div className="text-gray-300">
                      Via Isonzo, 87<br />02100 Rieti, RI
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-[#3C69AE]" />
                    <span className="text-gray-300">+39 320 419 6999</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-[#3C69AE]" />
                    <span className="text-gray-300">judorieti@virgilio.it</span>
                  </div>

                  {/* Icone Social */}
                  <div className="flex items-center space-x-2 mt-1">
                    <a href="https://www.facebook.com/JudoRieti/" target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-6 h-6 text-[#3C69AE] hover:text-white transition-colors" />
                    </a>
                    <a href="https://www.instagram.com/a.s.d.judorieti/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-6 h-6 text-[#3C69AE] hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Riga loghi ridotta al minimo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1.5 md:gap-2 mt-1.5 sm:mt-2">
          <div className="col-span-2 flex justify-start">
            <img 
              src="/assets/src/fijlkambianco.png" 
              alt="FIJLKAM Logo" 
              className="w-64 sm:w-80 md:w-[24rem] lg:w-[28rem] object-contain"
            />
          </div>
          <div className="col-span-2 flex justify-end">
            <img 
              src="/assets/src/logo1bianca.svg" 
              alt="Logo Judo Rieti" 
              className="w-64 sm:w-80 md:w-[22rem] lg:w-[26rem] object-contain"
            />
          </div>
        </div>

        {/* Bottom Bar super sottile */}
        <div className="border-t border-gray-700 py-1 mt-1.5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-0 md:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Judo Rieti. Tutti i diritti riservati.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-1 text-gray-400 text-xs sm:text-sm">
              <span>Fatto con</span>
              <Heart className="w-4 h-4 text-[#3C69AE]" />
              <span>per la comunità judoka di Rieti</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
