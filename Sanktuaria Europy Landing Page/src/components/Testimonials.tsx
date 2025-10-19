import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card } from "./ui/card";

export function Testimonials() {
  const reviews = [
    {
      name: "Anna Kowalska",
      city: "Lublin",
      rating: 5,
      text: "Najpiękniejsza pielgrzymka mojego życia. Fatima i Lourdes zapadły mi głęboko w serce. Msza Święta w Grocie Objawień to przeżycie, którego nigdy nie zapomnę. Opieka pilota i kapłana na najwyższym poziomie. Gorąco polecam!"
    },
    {
      name: "Janina Wiśniewska",
      city: "Warszawa",
      text: "Wspaniała organizacja, klimatyczny autokar, piękne hotele. Program był dopracowany w najmniejszych szczegółach. Szczególnie zapadło mi w pamięć Santiago de Compostela i procesja światła w Lourdes. Dziękuję Piotr Travel za tę duchową podróż!"
    },
    {
      name: "Marek Nowak",
      city: "Kraków",
      rating: 5,
      text: "Jeździłem już na wiele pielgrzymek, ale ta wyróżnia się profesjonalizmem i troską o uczestników. Kapłan codziennie celebrował Mszę Świętą, było dużo czasu na modlitwę i refleksję. Montserrat i Fatima to miejsca, które zmieniły moje życie."
    },
    {
      name: "Teresa Krawczyk",
      city: "Gdańsk",
      rating: 5,
      text: "Byłam z mamą na tej pielgrzymce i obie jesteśmy zachwycone. Wspólnota modlitwy, piękne miejsca, świetna atmosfera w grupie. Wszystko było perfekcyjnie zorganizowane. Z całego serca polecam każdemu, kto szuka duchowego wzmocnienia."
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-[var(--gold)]/10 rounded-full mb-4">
            <span className="text-[var(--gold)]">Opinie uczestników</span>
          </div>
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Co mówią nasi pielgrzymi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Przeczytaj, co piszą osoby, które już przeżyły tę duchową przygodę
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-white hover:shadow-xl transition-shadow relative">
                <div className="absolute top-4 right-4 text-[var(--gold)]/20">
                  <Quote className="w-12 h-12" />
                </div>
                
                <div className="relative">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-[var(--navy)] text-white flex items-center justify-center">
                      <span>{review.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <p className="text-[var(--navy)]">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.city}</p>
                    </div>
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
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <span className="text-[var(--navy)]" style={{ fontSize: '1.5rem', fontWeight: '600' }}>5.0</span>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="text-left">
              <p className="text-gray-600">Średnia ocena</p>
              <p className="text-sm text-gray-500">Na podstawie 120+ opinii</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
