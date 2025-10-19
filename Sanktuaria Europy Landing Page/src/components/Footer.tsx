import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="kontakt" className="bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* O firmie */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[var(--gold)] rounded-full flex items-center justify-center text-[var(--navy)]">
                <span>PT</span>
              </div>
              <div>
                <h3 className="text-white">Piotr Travel</h3>
                <p className="text-[var(--gold)] text-sm">Pielgrzymki z sercem</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Od 15 lat organizujemy pielgrzymki do najważniejszych sanktuariów w Europie i na świecie. 
              Podróżuj z wiarą i sercem.
            </p>
          </div>

          {/* Nawigacja */}
          <div>
            <h3 className="text-white mb-4">Nawigacja</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('offer')} className="text-white/80 hover:text-[var(--gold)] transition-colors">
                  Oferta
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('program')} className="text-white/80 hover:text-[var(--gold)] transition-colors">
                  Program
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-white/80 hover:text-[var(--gold)] transition-colors">
                  Galeria
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reviews')} className="text-white/80 hover:text-[var(--gold)] transition-colors">
                  Opinie
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reservation')} className="text-white/80 hover:text-[var(--gold)] transition-colors">
                  Rezerwacja
                </button>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <div className="text-white/80">
                  <p>ul. Brzeska 23</p>
                  <p>21-560 Międzyrzec Podlaski</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--gold)]" />
                <a href="tel:600301704" className="text-white/80 hover:text-[var(--gold)] transition-colors">
                  600 301 704
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--gold)]" />
                <a href="mailto:biuro@piotrtravel.pl" className="text-white/80 hover:text-[var(--gold)] transition-colors">
                  biuro@piotrtravel.pl
                </a>
              </li>
            </ul>
          </div>

          {/* Dane bankowe */}
          <div>
            <h3 className="text-white mb-4">Dane bankowe</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-[var(--gold)] mb-1">Konto PLN:</p>
                <p className="text-white/80 text-xs font-mono">
                  12 3456 7890 1234 5678 9012 3456
                </p>
              </div>
              <div>
                <p className="text-[var(--gold)] mb-1">Konto EUR:</p>
                <p className="text-white/80 text-xs font-mono">
                  PL12 3456 7890 1234 5678 9012 3457
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Section */}
        <div className="py-8 border-t border-white/10">
          <div className="text-sm text-white/70 leading-relaxed">
            <p className="mb-4">
              <strong className="text-white">Piotr Travel</strong> organizuje pielgrzymki do Lourdes, 
              Fatimy, Medjugorie, Ziemi Świętej i innych miejsc kultu religijnego w Europie i na świecie. 
              Oferujemy profesjonalnie przygotowane wyjazdy do najważniejszych sanktuariów maryjnych, 
              miejsc objawień Matki Bożej oraz sanktuariów świętych patronów.
            </p>
            <p>
              Nasze pielgrzymki to nie tylko zwiedzanie, ale przede wszystkim duchowa wędrówka – 
              czas modlitwy, refleksji i wspólnoty. Każdy wyjazd prowadzony jest przez doświadczonego 
              kapłana, który celebruje Msze Święte i towarzyszy pielgrzymom przez całą podróż. 
              Zapewniamy komfortowy transport, noclegi w sprawdzonych hotelach oraz pełne ubezpieczenie. 
              Podróżuj z wiarą i sercem – wybierz Piotr Travel.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © 2025 Piotr Travel. Wszelkie prawa zastrzeżone.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/60 hover:text-[var(--gold)] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-[var(--gold)] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-[var(--gold)] transition-colors">
              Polityka prywatności
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
