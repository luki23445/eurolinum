import { Button } from "./ui/button";
import { Calendar, MapPin, Euro } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1724398932316-e0d488b96e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3RoaWMlMjBjYXRoZWRyYWwlMjBzYW5jdHVhcnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA4Njk0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sanktuarium Europy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/90 via-[var(--navy)]/70 to-[var(--navy)]/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-2 bg-[var(--gold)]/20 backdrop-blur-sm rounded-full border border-[var(--gold)] mb-4">
            <span className="text-[var(--gold)]">Pielgrzymka 2026</span>
          </div>
          
          <h1 className="text-white max-w-4xl mx-auto" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2', fontWeight: '600' }}>
            Sanktuaria Europy
          </h1>
          
          <p className="text-white/90 max-w-2xl mx-auto" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', lineHeight: '1.6' }}>
            Praga • Lourdes • Fatima • Santiago de Compostela<br />
            Montserrat • Ars • La Salette • Altötting
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <Calendar className="w-5 h-5 text-[var(--gold)]" />
              <span>06–19 czerwca 2026</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <Euro className="w-5 h-5 text-[var(--gold)]" />
              <span>1700 zł + 890 €</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <MapPin className="w-5 h-5 text-[var(--gold)]" />
              <span>14 dni</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pt-8 space-y-4"
          >
            <Button 
              onClick={scrollToReservation}
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-[var(--navy)] px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Zarezerwuj miejsce
            </Button>
            
            <p className="text-white/80 text-sm">
              Zaliczka: 300 zł • Ograniczona liczba miejsc
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
