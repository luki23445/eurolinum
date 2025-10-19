import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    people: "1",
    notes: "",
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error("Musisz wyrazić zgodę na przetwarzanie danych osobowych");
      return;
    }

    // Symulacja wysłania formularza
    toast.success("Zgłoszenie zostało wysłane! Skontaktujemy się z Tobą wkrótce.");
    
    // Reset formularza
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      people: "1",
      notes: "",
      consent: false
    });
  };

  return (
    <section id="reservation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-[var(--gold)]/10 rounded-full mb-4">
            <span className="text-[var(--gold)]">Zapisz się</span>
          </div>
          <h2 className="text-[var(--navy)] mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Formularz rezerwacji
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wypełnij formularz lub zadzwoń – chętnie odpowiemy na wszystkie pytania
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formularz */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Imię i nazwisko *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jan Kowalski"
                  required
                  className="border-gray-300"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jan@example.com"
                    required
                    className="border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="600 123 456"
                    required
                    className="border-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">Miasto wyjazdu *</Label>
                  <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Wybierz miasto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="warszawa">Warszawa</SelectItem>
                      <SelectItem value="krakow">Kraków</SelectItem>
                      <SelectItem value="lublin">Lublin</SelectItem>
                      <SelectItem value="gdansk">Gdańsk</SelectItem>
                      <SelectItem value="poznan">Poznań</SelectItem>
                      <SelectItem value="wroclaw">Wrocław</SelectItem>
                      <SelectItem value="inne">Inne</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="people">Liczba osób *</Label>
                  <Select value={formData.people} onValueChange={(value) => setFormData({ ...formData, people: value })}>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 osoba</SelectItem>
                      <SelectItem value="2">2 osoby</SelectItem>
                      <SelectItem value="3">3 osoby</SelectItem>
                      <SelectItem value="4">4 osoby</SelectItem>
                      <SelectItem value="5+">5+ osób</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Dodatkowe uwagi</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Pytania, preferencje dotyczące pokoju, diety..."
                  className="border-gray-300 min-h-[100px]"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                  className="mt-1"
                />
                <Label htmlFor="consent" className="text-sm text-gray-600 cursor-pointer">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych przez Piotr Travel 
                  w celu kontaktu i realizacji rezerwacji. Administratorem danych jest 
                  Piotr Travel, ul. Brzeska 23, 21-560 Międzyrzec Podlaski. *
                </Label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-[var(--navy)]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Wyślij zgłoszenie
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  className="flex-1 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
                  onClick={() => window.location.href = 'tel:600301704'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Zadzwoń teraz
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Informacje kontaktowe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-[var(--navy)] text-white p-8 rounded-lg shadow-lg">
              <h3 className="mb-6" style={{ fontSize: '1.5rem' }}>Skontaktuj się z nami</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[var(--navy)]" />
                  </div>
                  <div>
                    <p className="text-[var(--gold)] mb-1">Telefon</p>
                    <a href="tel:600301704" className="text-white hover:text-[var(--gold)] transition-colors" style={{ fontSize: '1.25rem' }}>
                      600 301 704
                    </a>
                    <p className="text-white/70 text-sm mt-1">Pn-Pt: 9:00-18:00, Sob: 10:00-14:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[var(--navy)]" />
                  </div>
                  <div>
                    <p className="text-[var(--gold)] mb-1">Email</p>
                    <a href="mailto:biuro@piotrtravel.pl" className="text-white hover:text-[var(--gold)] transition-colors">
                      biuro@piotrtravel.pl
                    </a>
                    <p className="text-white/70 text-sm mt-1">Odpowiadamy w ciągu 24h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-l-[var(--gold)]">
              <h3 className="text-[var(--navy)] mb-4">Informacje o wpłacie</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Konto PLN:</p>
                  <p className="font-mono text-sm bg-gray-50 p-2 rounded">12 3456 7890 1234 5678 9012 3456</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Konto EUR:</p>
                  <p className="font-mono text-sm bg-gray-50 p-2 rounded">PL12 3456 7890 1234 5678 9012 3457</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm">
                    <strong>Zaliczka:</strong> 300 zł<br />
                    <strong>Tytuł przelewu:</strong> Pielgrzymka Sanktuaria Europy + imię i nazwisko
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--gold)]/10 p-6 rounded-lg border border-[var(--gold)]">
              <p className="text-[var(--navy)] text-sm leading-relaxed">
                <strong>Gwarancja bezpieczeństwa:</strong> Wszystkie wpłaty są chronione zgodnie 
                z przepisami prawa. Piotr Travel posiada wszystkie wymagane licencje 
                i ubezpieczenia turystyczne.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
