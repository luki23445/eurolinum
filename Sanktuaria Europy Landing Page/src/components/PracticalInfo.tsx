import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Card } from "./ui/card";

export function PracticalInfo() {
  const details = [
    { label: "Transport", value: "Klimatyzowany autokar premium" },
    { label: "Noclegi", value: "Hotele 2-3 gwiazdkowe, pokoje 2-3 osobowe" },
    { label: "Wyżywienie", value: "Śniadania + obiadokolacje (kolacja lub obiad)" },
    { label: "Opieka", value: "Doświadczony pilot i kapłan przez całą podróż" },
    { label: "Ubezpieczenie", value: "Koszty leczenia (KL) + następstw nieszczęśliwych wypadków (NNW)" },
    { label: "Msze Święte", value: "Codzienne celebracje w sanktuariach" },
    { label: "Procesje", value: "Udział w procesjach różańcowych i światła" },
    { label: "Zaliczka", value: "300 zł – wpłata rezerwacyjna" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Informacje praktyczne
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wszystko, co zapewniamy dla Twojego komfortu i bezpieczeństwa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {details.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--gold)] flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-[var(--navy)]" />
                  </div>
                  <div>
                    <h3 className="text-[var(--navy)] mb-1">{item.label}</h3>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="bg-[var(--navy)] text-white p-6 rounded-lg">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-[var(--gold)] mb-1">Cena pielgrzymki</p>
                    <p style={{ fontSize: '2rem', fontWeight: '600' }}>1700 zł + 890 €</p>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-white/80 mb-1">Zaliczka rezerwacyjna</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: '600' }}>300 zł</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
