import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function OtherTrips() {
  const trips = [
    {
      title: "Ziemia Święta – Izrael",
      description: "Śladami Jezusa Chrystusa: Jerozolima, Betlejem, Nazaret, Morze Galilejskie",
      duration: "10 dni",
      price: "3200 zł + 1200 €",
      image: "https://images.unsplash.com/photo-1544783164-83ee5bb2c319?w=600"
    },
    {
      title: "Włochy śladami św. Jana Pawła II",
      description: "Rzym, Watykan, Asyż, San Giovanni Rotondo, Loreto, Padwa",
      duration: "8 dni",
      price: "1900 zł + 700 €",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600"
    },
    {
      title: "Medjugorie – Spotkanie z Maryją",
      description: "Wzgórze Objawień, Kościół św. Jakuba, Góra Kriżevac, procesje",
      duration: "7 dni",
      price: "1500 zł + 600 €",
      image: "https://images.unsplash.com/photo-1601815436770-c7a7d161e011?w=600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-[var(--gold)]/10 rounded-full mb-4">
            <span className="text-[var(--gold)]">Inne propozycje</span>
          </div>
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Odkryj inne pielgrzymki
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Zobacz, dokąd jeszcze możesz z nami podróżować w duchowej atmosferze
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{trip.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[var(--navy)] mb-3">{trip.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">
                    {trip.description}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-500">od</p>
                        <p className="text-[var(--navy)]" style={{ fontSize: '1.25rem', fontWeight: '600' }}>{trip.price}</p>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy)]"
                    >
                      Dowiedz się więcej
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Interesuje Cię inna destynacja? Skontaktuj się z nami!
          </p>
          <Button 
            className="bg-[var(--navy)] hover:bg-[var(--navy)]/90 text-white"
            onClick={() => window.location.href = 'tel:600301704'}
          >
            Porozmawiajmy o Twojej pielgrzymce
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
