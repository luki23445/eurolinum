import { motion } from "motion/react";
import { Award, Shield, Users, Clock } from "lucide-react";
import { Card } from "./ui/card";

export function Organizer() {
  const features = [
    {
      icon: Clock,
      title: "15 lat doświadczenia",
      description: "Organizujemy pielgrzymki od 2009 roku"
    },
    {
      icon: Users,
      title: "Ponad 10 000 pielgrzymów",
      description: "Zaufało nam tysiące zadowolonych klientów"
    },
    {
      icon: Shield,
      title: "Pełne ubezpieczenie",
      description: "Bezpieczeństwo i ochrona na każdym etapie"
    },
    {
      icon: Award,
      title: "Certyfikowana działalność",
      description: "Licencja organizatora turystyki i pielgrzymek"
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
            <span className="text-[var(--gold)]">O nas</span>
          </div>
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Organizator
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[var(--navy)] text-white p-12 rounded-lg shadow-2xl">
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 mb-2">
                  <div className="w-16 h-16 bg-[var(--gold)] rounded-full flex items-center justify-center text-[var(--navy)]">
                    <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>PT</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '2rem', fontWeight: '600' }}>Piotr Travel</h3>
                    <p className="text-[var(--gold)]">Pielgrzymki z sercem</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  <strong className="text-white">Piotr Travel</strong> to biuro podróży specjalizujące się 
                  w organizacji pielgrzymek do najważniejszych sanktuariów w Europie i na świecie.
                </p>
                <p>
                  Od ponad 15 lat służymy pielgrzymom, organizując wyjazdy do Ziemi Świętej, Lourdes, 
                  Fatimy, Medjugorie i wielu innych miejsc kultu religijnego. Naszą misją jest nie tylko 
                  zapewnienie komfortowej podróży, ale przede wszystkim <strong className="text-[var(--gold)]">
                  stworzenie warunków do głębokiego przeżycia duchowego</strong>.
                </p>
                <p>
                  Każda pielgrzymka jest prowadzona przez doświadczonego kapłana, który towarzyszy grupie 
                  przez cały wyjazd, celebrując Msze Święte i udzielając sakramentów. Zapewniamy opiekę 
                  profesjonalnych pilotów, komfortowy transport i bezpieczeństwo na najwyższym poziomie.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gray-50 hover:bg-white hover:shadow-lg transition-all border-l-4 border-l-[var(--gold)]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--gold)]/20 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h3 className="text-[var(--navy)] mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            <Card className="p-6 bg-[var(--gold)]/10 border-2 border-[var(--gold)]">
              <h4 className="text-[var(--navy)] mb-3">Dane kontaktowe</h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>Piotr Travel</strong></p>
                <p>ul. Brzeska 23</p>
                <p>21-560 Międzyrzec Podlaski</p>
                <p className="pt-2">
                  <strong>Tel:</strong> <a href="tel:600301704" className="text-[var(--gold)] hover:underline">600 301 704</a>
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:biuro@piotrtravel.pl" className="text-[var(--gold)] hover:underline">biuro@piotrtravel.pl</a>
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
