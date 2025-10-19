import { Calendar, MapPin, Euro, Clock, Users2, Shield } from "lucide-react";
import { motion } from "motion/react";

export function KeyInfo() {
  const mainInfo = [
    {
      icon: Calendar,
      label: "Termin wyjazdu",
      value: "06–19 czerwca 2026",
      subtext: "14 niezapomnianych dni"
    },
    {
      icon: Euro,
      label: "Cena od osoby",
      value: "1700 zł + 890 €",
      subtext: "Zaliczka tylko 300 zł"
    },
    {
      icon: MapPin,
      label: "Trasa",
      value: "6 krajów • 8 sanktuariów",
      subtext: "Ponad 5000 km podróży"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "14 dni pielgrzymki",
      description: "Każdy dzień wypełniony modlitwą i zwiedzaniem"
    },
    {
      icon: Users2,
      title: "Pilot + Kapłan",
      description: "Profesjonalna opieka przez całą podróż"
    },
    {
      icon: Shield,
      title: "Pełne ubezpieczenie",
      description: "KL, NNW - Twoje bezpieczeństwo na pierwszym miejscu"
    }
  ];

  return (
    <section id="offer" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--navy)]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[var(--gold)]/10 rounded-full mb-4">
            <span className="text-[var(--gold)]">Kluczowe informacje</span>
          </div>
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Wszystko, co musisz wiedzieć
          </h2>
        </motion.div>

        {/* Main Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mainInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] to-[var(--navy-light)] rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[var(--gold)] flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-[var(--navy)]" />
                  </div>
                  <div className="text-right">
                    <p className="text-white/70 text-sm mb-1">{item.label}</p>
                    <p className="text-[var(--gold)] text-xs">{item.subtext}</p>
                  </div>
                </div>
                <p className="text-white" style={{ fontSize: '1.75rem', fontWeight: '600', lineHeight: '1.2' }}>
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[var(--gold)]" />
              </div>
              <h3 className="text-[var(--navy)] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-[var(--gold)] to-[var(--gold)]/80 p-8 rounded-2xl shadow-xl text-center"
        >
          <p className="text-[var(--navy)]" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
            Ograniczona liczba miejsc • Rezerwacja już dostępna
          </p>
          <p className="text-[var(--navy)]/70 mt-2">
            Zaliczka 300 zł gwarantuje Ci miejsce w pielgrzymce
          </p>
        </motion.div>
      </div>
    </section>
  );
}
