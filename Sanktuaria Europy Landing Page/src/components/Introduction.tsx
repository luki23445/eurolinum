import { motion } from "motion/react";

export function Introduction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="inline-block px-4 py-2 bg-[var(--gold)]/10 rounded-full mb-4">
            <span className="text-[var(--gold)]">Zaproszenie do duchowej podróży</span>
          </div>
          
          <h2 className="text-[var(--navy)]" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Pielgrzymka do najważniejszych miejsc kultu w Europie
          </h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontSize: '1.1rem' }}>
            <p>
              Zapraszamy Państwa na wyjątkową pielgrzymkę śladami wiary i historii europejskiego chrześcijaństwa. 
              To nie tylko podróż przez malownicze krajobrazy Czech, Francji, Hiszpanii, Portugalii i Niemiec, 
              ale przede wszystkim <strong className="text-[var(--navy)]">głęboka duchowa wędrówka</strong> do miejsc, 
              które od wieków przyciągają pielgrzymów z całego świata.
            </p>
            
            <p>
              Odwiedzimy najsłynniejsze sanktuaria maryjne – <strong className="text-[var(--navy)]">Lourdes</strong>, 
              gdzie Maryja objawiła się św. Bernadecie, oraz <strong className="text-[var(--navy)]">Fatimę</strong>, 
              miejsce objawień trzem pastuszkom. Przejdziemy szlakiem pielgrzymów do grobu św. Jakuba 
              w <strong className="text-[var(--navy)]">Santiago de Compostela</strong>, zobaczymy Czarną Madonnę 
              w <strong className="text-[var(--navy)]">Montserrat</strong> i odwiedzimy <strong className="text-[var(--navy)]">Ars</strong>, 
              gdzie posługiwał św. Jan Maria Vianney – patron proboszczów.
            </p>
            
            <p>
              Każdy dzień tej pielgrzymki to czas na <strong className="text-[var(--gold)]">modlitwę, refleksję i 
              wspólnotę</strong>. Towarzyszy nam doświadczony kapłan, który będzie odprawiał Msze Święte 
              w najpiękniejszych sanktuariach Europy. To podróż, która zmienia serca i pozostawia 
              niezapomniane wspomnienia na całe życie.
            </p>
            
            <p className="text-[var(--navy)] pt-4" style={{ fontSize: '1.2rem', fontWeight: '500' }}>
              Dołącz do nas i przeżyj duchową przygodę, która pogłębi Twoją wiarę i otworzy serce 
              na łaskę Bożą.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
