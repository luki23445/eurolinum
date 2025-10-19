import { motion } from "motion/react";
import { MapPin, Church, Coffee, Moon, Sun, Camera } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function DailyProgram() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const program = [
    {
      day: 1,
      date: "6 czerwca",
      title: "Wyjazd z Polski",
      location: "Polska → Czechy",
      type: "transport",
      image: "https://images.unsplash.com/photo-1704455567278-64f8b72de247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRoZWRyYWwlMjBkb21lJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MDg3MDI2MHww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Wyjazd z wybranych miast Polski w godz. wieczornych",
        "Komfortowy przejazd autokarem premium",
        "Nocleg w autobusie"
      ],
      activities: []
    },
    {
      day: 2,
      date: "7 czerwca",
      title: "Praga – Dzieciątko Jezus",
      location: "Czechy",
      type: "destination",
      image: "https://images.unsplash.com/photo-1680025556486-0adc66b9df92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFndWUlMjBjaHVyY2glMjBjemVjaHxlbnwxfHx8fDE3NjA4Njk0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Przyjazd do stolicy Czech",
        "Zwiedzanie Pragi – Stare Miasto, Most Karola",
        "Sanktuarium Dzieciątka Jezus w kościele Najświętszej Marii Panny Zwycięskiej"
      ],
      activities: [
        { icon: Church, text: "Msza Święta w sanktuarium" },
        { icon: Camera, text: "Czas na zwiedzanie i fotografie" },
        { icon: Moon, text: "Przejazd w kierunku Francji, nocleg" }
      ]
    },
    {
      day: 3,
      date: "8 czerwca",
      title: "Ars – Święty proboszcz",
      location: "Francja",
      type: "destination",
      image: "https://images.unsplash.com/photo-1550541231-56ddb7f844ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBzdGFpbmVkJTIwZ2xhc3N8ZW58MXx8fHwxNzYwNzk5MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Nawiedzenie miejsca posługi św. Jana Marii Vianneya",
        "Zwiedzanie bazyliki i oglądanie relikwii świętego",
        "Modlitwa przy niezniszczonym ciele patrona proboszczów"
      ],
      activities: [
        { icon: Church, text: "Msza Święta w bazylice" },
        { icon: Sun, text: "Czas na refleksję i modlitwę osobistą" },
        { icon: Moon, text: "Przejazd do Lourdes" }
      ]
    },
    {
      day: 4,
      date: "9-10 czerwca",
      title: "Lourdes – Grota Objawień",
      location: "Francja",
      type: "highlight",
      image: "https://images.unsplash.com/photo-1641070977656-40142308ab27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3VyZGVzJTIwZ3JvdHRvJTIwZnJhbmNlfGVufDF8fHx8MTc2MDg2OTQwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Dwa pełne dni w najważniejszym sanktuarium maryjnym świata",
        "Msza Święta w Grocie Objawień – miejscu spotkania Maryji z Bernadetą",
        "Droga Krzyżowa na wzgórzu z widokiem na Pireneje",
        "Kąpiel w basenach z cudowną wodą",
        "Procesja różańcowa po Esplanadzie",
        "Niezapomniana procesja światła wieczorem"
      ],
      activities: [
        { icon: Church, text: "Codzienne Msze Święte i adoracja" },
        { icon: Sun, text: "Zwiedzanie bazyliki i okolicznych miejsc" },
        { icon: Camera, text: "Czas na osobistą modlitwę i refleksję" }
      ]
    },
    {
      day: 6,
      date: "11 czerwca",
      title: "La Salette – Objawienie w Alpach",
      location: "Francja",
      type: "destination",
      image: "https://images.unsplash.com/photo-1724398932316-e0d488b96e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3RoaWMlMjBjYXRoZWRyYWwlMjBzYW5jdHVhcnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA4Njk0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Wyjazd do La Salette – miejsca objawień Matki Bożej Płaczącej",
        "Msza Święta w bazylice na wysokości 1800 m n.p.m.",
        "Droga Krzyżowa w alpejskich krajobrazach"
      ],
      activities: [
        { icon: Church, text: "Msza Święta i modlitwa różańcowa" },
        { icon: Camera, text: "Czas na kontemplację w górach" },
        { icon: Moon, text: "Przejazd w kierunku Hiszpanii" }
      ]
    },
    {
      day: 7,
      date: "12 czerwca",
      title: "Montserrat – Ciemna Madonna",
      location: "Hiszpania",
      type: "destination",
      image: "https://images.unsplash.com/photo-1729286284793-6f4eaf7b6a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250c2VycmF0JTIwbW9uYXN0ZXJ5JTIwc3BhaW58ZW58MXx8fHwxNzYwODY5NDExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Przyjazd do słynnego klasztoru benedyktynów w Katalonii",
        "Zwiedzanie sanktuarium Czarnej Madonny (La Moreneta)",
        "Możliwość wysłuchania śpiewu chóru chłopięcego Escolania"
      ],
      activities: [
        { icon: Church, text: "Msza Święta w bazylice" },
        { icon: Camera, text: "Spacer górskimi ścieżkami" },
        { icon: Moon, text: "Przejazd do Santiago de Compostela" }
      ]
    },
    {
      day: 8,
      date: "13-14 czerwca",
      title: "Santiago de Compostela – Grób św. Jakuba",
      location: "Hiszpania",
      type: "highlight",
      image: "https://images.unsplash.com/photo-1746104910370-f6ff59e52fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50aWFnbyUyMGNvbXBvc3RlbGElMjBjYXRoZWRyYWx8ZW58MXx8fHwxNzYwODY5NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Dwa dni w mieście św. Jakuba – końcu Camino de Santiago",
        "Msza Święta przy grobie apostoła w katedrze",
        "Uczestnictwo w nabożeństwie z tradycyjnym kadzidłem Botafumeiro",
        "Zwiedzanie starego miasta – UNESCO World Heritage",
        "Przejście ostatniego odcinka szlaku pielgrzymiego"
      ],
      activities: [
        { icon: Church, text: "Msze Święte i modlitwa przy grobie św. Jakuba" },
        { icon: Camera, text: "Zwiedzanie katedry i starego miasta" },
        { icon: Sun, text: "Czas wolny na zakupy i odpoczynek" }
      ]
    },
    {
      day: 10,
      date: "15-16 czerwca",
      title: "Fatima – Objawienia Matki Bożej",
      location: "Portugalia",
      type: "highlight",
      image: "https://images.unsplash.com/photo-1567340298284-cff77c04b559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXRpbWElMjBwb3J0dWdhbCUyMHNhbmN0dWFyeXxlbnwxfHx8fDE3NjA4Njk0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Dwa pełne dni w drugim najważniejszym sanktuarium maryjnym",
        "Msza Święta w Kaplicy Objawień",
        "Zwiedzanie domów pastuszków w Aljustrel",
        "Nawiedzenie grobu siostry Łucji oraz bł. Hiacynty i Franciszka",
        "Procesja różańcowa i procesja światła"
      ],
      activities: [
        { icon: Church, text: "Msze Święte i adoracja Najświętszego Sakramentu" },
        { icon: Sun, text: "Droga Krzyżowa i modlitwa różańcowa" },
        { icon: Camera, text: "Zwiedzanie bazyliki i kompleksu sanktuarium" }
      ]
    },
    {
      day: 12,
      date: "17 czerwca",
      title: "Przejazd do Niemiec",
      location: "Portugalia → Niemcy",
      type: "transport",
      image: "https://images.unsplash.com/photo-1640794296019-ab6b5de045c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjByb3NhcnklMjBiZWFkc3xlbnwxfHx8fDE3NjA4NzAyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Wyjazd z Fatimy w kierunku Niemiec",
        "Długi przejazd przez Hiszpanię i Francję",
        "Postoje na odpoczynek, posiłki i modlitwę"
      ],
      activities: [
        { icon: Coffee, text: "Regularne przerwy na odpoczynek" },
        { icon: Moon, text: "Nocleg w komfortowym hotelu w drodze" }
      ]
    },
    {
      day: 13,
      date: "18 czerwca",
      title: "Altötting – Czarna Madonna Bawarii",
      location: "Niemcy",
      type: "destination",
      image: "https://images.unsplash.com/photo-1758448997323-bfe47ae7060e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxpZ2lvdXMlMjBjYW5kbGVzJTIwcHJheWVyfGVufDF8fHx8MTc2MDg2OTQxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Przyjazd do najważniejszego sanktuarium maryjnego w Niemczech",
        "Msza Święta w Kaplicy Łask (Gnadenkapelle)",
        "Modlitwa przed cudownym obrazem Matki Bożej",
        "Zwiedzanie kompleksu sanktuarium"
      ],
      activities: [
        { icon: Church, text: "Msza Święta i modlitwa różańcowa" },
        { icon: Camera, text: "Czas na zwiedzanie i zakupy pamiątek" },
        { icon: Moon, text: "Wyjazd w kierunku Polski" }
      ]
    },
    {
      day: 14,
      date: "19 czerwca",
      title: "Powrót do domu",
      location: "Niemcy → Polska",
      type: "transport",
      image: "https://images.unsplash.com/photo-1581116402043-18889327a2d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxncmltcyUyMHdhbGtpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NjA4Njk0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Przejazd przez Niemcy i Czechy",
        "Wspomnienia z pielgrzymki, dzielenie się przeżyciami",
        "Przyjazd do Polski w godzinach wieczornych"
      ],
      activities: [
        { icon: Coffee, text: "Przerwy na odpoczynek i posiłki" },
        { icon: Sun, text: "Zakończenie niezapomnianej pielgrzymki" }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'highlight': return 'bg-[var(--gold)] text-[var(--navy)]';
      case 'destination': return 'bg-[var(--navy)] text-white';
      case 'transport': return 'bg-gray-500 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'highlight': return 'Główny punkt programu';
      case 'destination': return 'Sanktuarium';
      case 'transport': return 'Przejazd';
      default: return '';
    }
  };

  return (
    <section id="program" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[var(--gold)]/10 rounded-full mb-4">
            <span className="text-[var(--gold)]">Szczegółowy plan</span>
          </div>
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Program dzień po dniu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            14 dni wypełnionych modlitwą, zwiedzaniem i głębokim duchowym przeżyciem
          </p>
        </motion.div>

        <div className="space-y-6">
          {program.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all bg-white">
                <div className="grid md:grid-cols-[300px,1fr] gap-0">
                  {/* Image */}
                  <div className="relative h-48 md:h-auto overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[var(--navy)]/80 to-transparent"></div>
                    
                    {/* Day Number Badge */}
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-[var(--gold)] flex items-center justify-center shadow-xl">
                      <div className="text-center">
                        <span className="block text-[var(--navy)]" style={{ fontSize: '1.5rem', fontWeight: '600', lineHeight: '1' }}>
                          {item.day}
                        </span>
                        <span className="block text-[var(--navy)] text-xs">DZIEŃ</span>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute bottom-4 left-4">
                      <Badge className={`${getTypeColor(item.type)}`}>
                        {getTypeLabel(item.type)}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-[var(--navy)]" style={{ fontSize: '1.5rem' }}>
                            {item.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{item.date}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-[var(--gold)]" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2"></div>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Activities */}
                    {item.activities.length > 0 && (
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                        {item.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm text-gray-700">
                            <activity.icon className="w-4 h-4 text-[var(--gold)]" />
                            <span>{activity.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[var(--gold)]"></div>
            <span className="text-sm text-gray-600">Główne sanktuaria</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[var(--navy)]"></div>
            <span className="text-sm text-gray-600">Miejsca kultu</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gray-500"></div>
            <span className="text-sm text-gray-600">Dni przejazdu</span>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-white p-8 rounded-2xl shadow-lg border-l-4 border-l-[var(--gold)]"
        >
          <p className="text-[var(--navy)] mb-2">
            ⚠️ Ważna informacja
          </p>
          <p className="text-gray-600 leading-relaxed">
            Program może ulec niewielkim zmianom w zależności od warunków drogowych, godzin otwarcia 
            sanktuariów i dostępności miejsc noclegowych. Pilot na bieżąco informuje o ewentualnych 
            modyfikacjach. Wszystkie zmiany są wprowadzane z troską o komfort i bezpieczeństwo pielgrzymów.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
