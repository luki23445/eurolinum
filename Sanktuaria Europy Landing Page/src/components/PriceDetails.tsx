import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { Card } from "./ui/card";

export function PriceDetails() {
  const included = [
    "Transport klimatyzowanym autokarem premium",
    "Noclegi w hotelach 2-3★ w pokojach 2-3 osobowych",
    "Wyżywienie: śniadania + obiadokolacje",
    "Ubezpieczenie KL (koszty leczenia) i NNW",
    "Opieka pilota przez całą podróż",
    "Opieka kapłana - Msze Święte w sanktuariach",
    "Procesje różańcowe i światła",
    "Materiały pielgrzymkowe i przewodnik"
  ];

  const notIncluded = [
    "Bilety wstępu do zwiedzanych obiektów",
    "Przewodnicy lokalni w sanktuariach",
    "Opłaty klimatyczne i drogowe - około 90 €",
    "Dodatkowe posiłki poza programem",
    "Napoje do posiłków",
    "Wydatki osobiste i pamiątki"
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
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Co zawiera cena
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Przejrzysta oferta – dokładnie wiesz, za co płacisz
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Cena zawiera */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-8 bg-gradient-to-br from-[var(--navy)] to-[var(--navy-light)] text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center">
                  <Check className="w-6 h-6 text-[var(--navy)]" />
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>Cena zawiera</h3>
              </div>
              <ul className="space-y-4">
                {included.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-center">
                  <p className="text-[var(--gold)] mb-2">Cena pielgrzymki</p>
                  <p style={{ fontSize: '2.5rem', fontWeight: '600' }}>1700 zł + 890 €</p>
                  <p className="text-white/80 text-sm mt-2">Zaliczka: 300 zł</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Cena nie zawiera */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-8 bg-white shadow-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <X className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="text-[var(--navy)]" style={{ fontSize: '1.5rem' }}>Cena nie zawiera</h3>
              </div>
              <ul className="space-y-4">
                {notIncluded.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-[var(--gold)]/10 p-4 rounded-lg">
                  <p className="text-[var(--navy)] text-sm">
                    <strong>Ważne:</strong> Dodatkowe opłaty klimatyczne i drogowe (około 90 €) 
                    płatne pilotowi w autobusie podczas wyjazdu.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600">
            Masz pytania dotyczące oferty? <a href="tel:600301704" className="text-[var(--gold)] hover:underline">Zadzwoń do nas</a> – chętnie pomożemy!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
