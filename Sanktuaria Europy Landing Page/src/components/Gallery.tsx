import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1641070977656-40142308ab27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3VyZGVzJTIwZ3JvdHRvJTIwZnJhbmNlfGVufDF8fHx8MTc2MDg2OTQwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Lourdes - Grota Objawień"
    },
    {
      url: "https://images.unsplash.com/photo-1567340298284-cff77c04b559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXRpbWElMjBwb3J0dWdhbCUyMHNhbmN0dWFyeXxlbnwxfHx8fDE3NjA4Njk0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Fatima - Sanktuarium"
    },
    {
      url: "https://images.unsplash.com/photo-1746104910370-f6ff59e52fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50aWFnbyUyMGNvbXBvc3RlbGElMjBjYXRoZWRyYWx8ZW58MXx8fHwxNzYwODY5NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Santiago de Compostela - Katedra"
    },
    {
      url: "https://images.unsplash.com/photo-1729286284793-6f4eaf7b6a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250c2VycmF0JTIwbW9uYXN0ZXJ5JTIwc3BhaW58ZW58MXx8fHwxNzYwODY5NDExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Montserrat - Klasztor"
    },
    {
      url: "https://images.unsplash.com/photo-1680025556486-0adc66b9df92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFndWUlMjBjaHVyY2glMjBjemVjaHxlbnwxfHx8fDE3NjA4Njk0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Praga - Kościół"
    },
    {
      url: "https://images.unsplash.com/photo-1758448997323-bfe47ae7060e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxpZ2lvdXMlMjBjYW5kbGVzJTIwcHJheWVyfGVufDF8fHx8MTc2MDg2OTQxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Modlitwa ze świecami"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-[var(--gold)]/10 rounded-full mb-4">
            <span className="text-[var(--gold)]">Wspomnienia</span>
          </div>
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Galeria zdjęć
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Odkryj piękno miejsc, które czekają na Ciebie podczas pielgrzymki
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => setSelectedImage(image.url)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[var(--gold)] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-5xl max-h-[90vh]"
            >
              <img
                src={selectedImage}
                alt="Powiększone zdjęcie"
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
