import { motion } from "motion/react";
import { MapPin, Plane } from "lucide-react";

export function RouteMap() {
  const countries = [
    { 
      name: "Polska", 
      flag: "🇵🇱", 
      highlight: "Start pielgrzymki",
      color: "from-blue-500 to-blue-600"
    },
    { 
      name: "Czechy", 
      flag: "🇨🇿", 
      highlight: "Praga – Dzieciątko Jezus",
      color: "from-red-500 to-red-600"
    },
    { 
      name: "Francja", 
      flag: "🇫🇷", 
      highlight: "Lourdes, Ars, La Salette",
      color: "from-blue-600 to-indigo-600"
    },
    { 
      name: "Hiszpania", 
      flag: "🇪🇸", 
      highlight: "Santiago, Montserrat",
      color: "from-yellow-500 to-red-500"
    },
    { 
      name: "Portugalia", 
      flag: "🇵🇹", 
      highlight: "Fatima – Objawienia Matki Bożej",
      color: "from-green-500 to-red-500"
    },
    { 
      name: "Niemcy", 
      flag: "🇩🇪", 
      highlight: "Altötting",
      color: "from-gray-700 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a3a52' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[var(--gold)]/10 rounded-full mb-4">
            <span className="text-[var(--gold)]">Nasza trasa</span>
          </div>
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Przez serce Europy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            6 krajów • 8 sanktuariów • 5000+ km duchowej wędrówki
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--navy)] via-[var(--gold)] to-[var(--navy)]" style={{ transform: 'translateY(-50%)' }}></div>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center group">
                  {/* Flag Circle */}
                  <div className="relative mb-4">
                    <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br ${country.color} p-0.5 shadow-2xl transform group-hover:scale-110 transition-all duration-300 relative z-10`}>
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-4xl lg:text-5xl">{country.flag}</span>
                      </div>
                    </div>
                    
                    {/* Pulse Animation */}
                    <div className="absolute inset-0 rounded-full bg-[var(--gold)] opacity-20 animate-ping"></div>
                    
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--navy)] text-white flex items-center justify-center text-sm font-semibold shadow-lg z-20">
                      {index + 1}
                    </div>
                  </div>

                  {/* Country Info Card */}
                  <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all min-h-[100px] flex flex-col justify-center border border-gray-100 group-hover:border-[var(--gold)] w-full">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-[var(--gold)]" />
                      <h3 className="text-[var(--navy)]">{country.name}</h3>
                    </div>
                    <p className="text-gray-600 text-xs leading-tight">
                      {country.highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-light)] p-6 rounded-xl text-white text-center shadow-xl">
            <div className="flex items-center justify-center mb-2">
              <Plane className="w-6 h-6 text-[var(--gold)]" />
            </div>
            <p className="text-[var(--gold)] text-sm mb-1">Dystans</p>
            <p style={{ fontSize: '2rem', fontWeight: '600' }}>5000+ km</p>
          </div>

          <div className="bg-gradient-to-br from-[var(--gold)] to-[var(--gold)]/80 p-6 rounded-xl text-[var(--navy)] text-center shadow-xl">
            <div className="flex items-center justify-center mb-2">
              <MapPin className="w-6 h-6" />
            </div>
            <p className="text-[var(--navy)]/70 text-sm mb-1">Sanktuaria</p>
            <p style={{ fontSize: '2rem', fontWeight: '600' }}>8 miejsc</p>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl text-[var(--navy)] text-center shadow-xl">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl">🌍</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Kraje</p>
            <p style={{ fontSize: '2rem', fontWeight: '600' }}>6 państw</p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-l-[var(--gold)]">
            <p className="text-gray-700 leading-relaxed">
              Nasza trasa prowadzi przez najbardziej znaczące miejsca kultu religijnego w Europie. 
              Od Pragi przez francuskie Alpy do Santiago de Compostela i Fatimy – każde miejsce to 
              <strong className="text-[var(--navy)]"> unikalna historia wiary</strong> i 
              <strong className="text-[var(--gold)]"> duchowego przebudzenia</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
