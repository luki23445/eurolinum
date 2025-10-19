import { motion } from "motion/react";
import { Heart, Users, Church, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SpiritualSection() {
  const spiritualValues = [
    {
      icon: Heart,
      title: "Pogłębienie wiary",
      description: "Odwiedzamy najważniejsze sanktuaria, gdzie modlili się święci i gdzie Maryja objawiła się wiernym"
    },
    {
      icon: Users,
      title: "Wspólnota modlitwy",
      description: "Razem uczestniczymy we Mszach Świętych, procesjach i adoracji Najświętszego Sakramentu"
    },
    {
      icon: Church,
      title: "Czas refleksji",
      description: "Każdy dzień to okazja do osobistej modlitwy, zadumy i spotkania z Bogiem w ciszy serca"
    },
    {
      icon: BookOpen,
      title: "Formacja duchowa",
      description: "Kapłan towarzyszy nam przez całą pielgrzymkę, głosząc nauki i udzielając sakramentów"
    }
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
          <div className="inline-block px-4 py-2 bg-[var(--gold)]/10 rounded-full mb-4">
            <span className="text-[var(--gold)]">Duchowy wymiar podróży</span>
          </div>
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Znaczenie pielgrzymki
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pielgrzymka to nie tylko turystyka – to droga duchowa, która zmienia serca
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581116402043-18889327a2d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxncmltcyUyMHdhbGtpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NjA4Njk0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Grupa pielgrzymów"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/50 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {spiritualValues.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--gold)]/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="text-[var(--navy)] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto border-t-4 border-t-[var(--gold)]">
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontSize: '1.1rem' }}>
              „Pielgrzymka to szczególny czas łaski. To moment, kiedy wychodzimy z codzienności, 
              aby spotkać Boga w miejscach świętych. To czas wspólnoty, modlitwy i odnowy duchowej. 
              Każdy krok tej drogi to krok bliżej nieba."
            </p>
            <p className="text-[var(--navy)]">
              — Ks. Piotr Kowalski, organizator pielgrzymek
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
