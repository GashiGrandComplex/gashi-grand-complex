import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*Mesazh i ri nga Website*%0A%0A` +
      `*Emri:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Telefoni:* ${formData.phone}%0A%0A` +
      `*Mesazhi:*%0A${formData.message}`;
    
    // WhatsApp business number
    const whatsappNumber = '38345305205';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Duke ju drejtuar në WhatsApp",
      description: "Mund të vazhdoni bisedën në WhatsApp.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, label: 'Telefoni', value: '+383 45 305 205', href: 'tel:+38345305205' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'info@gashigrandcomplex.com', href: 'mailto:info@gashigrandcomplex.com' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Adresa', value: 'Rruga Kastriotët, Prizren, Kosovë', href: 'https://maps.app.goo.gl/cWKwpMQayw38hxkQ9?g_st=aw' },
    { icon: <Clock className="w-5 h-5" />, label: 'Orari', value: 'E Hënë - E Shtunë: 08:00 - 18:00', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Na Kontaktoni
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Jemi Këtu Për Ju
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Keni pyetje rreth banesave tona? Na kontaktoni dhe ekipi ynë 
            do t'ju ndihmojë të gjeni shtëpinë e ëndrrave tuaja.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === 'Adresa' ? '_blank' : undefined}
                rel={item.label === 'Adresa' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-gold/50 hover:shadow-gold transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-charcoal">{item.icon}</span>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  <div className="font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Map - lokacioni i saktë: https://maps.app.goo.gl/cWKwpMQayw38hxkQ9 */}
            <motion.a
              href="https://maps.app.goo.gl/cWKwpMQayw38hxkQ9?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="block h-48 sm:h-56 md:h-64 rounded-xl border border-border overflow-hidden bg-muted relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <iframe
                src="https://www.google.com/maps?q=Rruga+Kastriotet,+Prizren,+Kosovo&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gashi Grand Complex - Kliko për të hapur në Google Maps"
              />
              <span className="absolute inset-0 rounded-xl" aria-hidden />
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                Shiko në Google Maps →
              </span>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card shadow-card border border-border">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Caktoni një Termin
              </h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Emri i Plotë
                  </label>
                  <Input
                    placeholder="Shkruani emrin tuaj"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="email@shembull.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefoni
                    </label>
                    <Input
                      type="tel"
                      placeholder="+383 4X XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mesazhi
                  </label>
                  <Textarea
                    placeholder="Shkruani mesazhin tuaj këtu..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button type="submit" variant="gold" size="xl" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Dërgo Mesazhin
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
