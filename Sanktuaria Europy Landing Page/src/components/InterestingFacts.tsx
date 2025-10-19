import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Sparkles } from "lucide-react";

export function InterestingFacts() {
  const facts = [
    {
      place: "Lourdes",
      country: "Francja",
      fact: "Od 1858 roku, kiedy Maryja objawiła się św. Bernadecie, Kościół uznał oficjalnie 70 przypadków cudownych uzdrowień. Rocznie sanktuarium odwiedza ponad 6 milionów pielgrzymów."
    },
    {
      place: "Fatima",
      country: "Portugalia",
      fact: "Objawienia Matki Bożej miały miejsce w 1917 roku trzem pastuszkom: Łucji, Hiacyncie i Franciszkowi. Fatima to drugie po Lourdes najważniejsze sanktuarium maryjne na świecie."
    },
    {
      place: "Santiago de Compostela",
      country: "Hiszpania",
      fact: "Grób św. Jakuba Większego, apostoła Chrystusa, znajduje się w katedrze w Santiago. Camino de Santiago to jeden z najstarszych szlaków pielgrzymkowych w Europie, liczący ponad 1000 lat tradycji."
    },
    {
      place: "Montserrat",
      country: "Hiszpania",
      fact: "Czarna Madonna z Montserrat, zwana La Moreneta, to XII-wieczna figura Matki Bożej z Dzieciątkiem. Klasztor benedyktynów położony jest na wysokości 720 m n.p.m. w malowniczych górach."
    },
    {
      place: "Ars",
      country: "Francja",
      fact: "Św. Jan Maria Vianney, proboszcz z Ars, jest patronem wszystkich księży. Przez 40 lat posługi spowiadał nawet 16 godzin dziennie. Jego niezniszczone ciało spoczywa w szklanej trumnie w bazylice."
    },
    {
      place: "Altötting",
      country: "Niemcy",
      fact: "Kaplica Łask w Altötting istnieje od VIII wieku. Cudowny obraz Matki Bożej z Dzieciątkiem przyciąga pielgrzymów od ponad 500 lat. To najważniejsze sanktuarium maryjne w Niemczech."
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
            <span className="text-[var(--gold)]">Ciekawostki</span>
          </div>
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            O miejscach, które odwiedzimy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Poznaj fascynującą historię i duchowe bogactwo sanktuariów Europy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-white hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-t-[var(--gold)]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-[var(--navy)] mb-1">{item.place}</h3>
                    <p className="text-sm text-[var(--gold)]">{item.country}</p>
                  </div>
                  <Sparkles className="w-5 h-5 text-[var(--gold)]" />
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.fact}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
