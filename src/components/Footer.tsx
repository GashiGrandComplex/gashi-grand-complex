import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-charcoal font-display font-bold text-2xl">G</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground">
                  Gashi Grand
                </h3>
                <p className="text-primary-foreground/60 text-sm">Complex</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Kompleksi më modern i banimit në Prizren. Cilësi premium dhe 
              dizajn elegant për familjen tuaj.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 hover:bg-gold/20 flex items-center justify-center text-gold transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 hover:bg-gold/20 flex items-center justify-center text-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 hover:bg-gold/20 flex items-center justify-center text-gold transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">
              Lidhjet e Shpejta
            </h4>
            <ul className="space-y-3">
              {['Ballina', 'Banesat', 'Statistikat', 'Partnerët', 'Kontakti'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-primary-foreground/70 hover:text-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">
              Bllokët
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#apartments" className="text-primary-foreground/70 hover:text-gold transition-colors duration-300">
                  Blloku A - 6 Banesa
                </a>
              </li>
              <li>
                <a href="#apartments" className="text-primary-foreground/70 hover:text-gold transition-colors duration-300">
                  Blloku B - 6 Banesa
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors duration-300">
                  Katalog PDF
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">
              Kontakti
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+38345305205" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors duration-300">
                  <Phone className="w-5 h-5 text-gold" />
                  +383 45 305 205
                </a>
              </li>
              <li>
                <a href="mailto:info@gashigrandcomplex.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors duration-300">
                  <Mail className="w-5 h-5 text-gold" />
                  info@gashigrandcomplex.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-primary-foreground/70">
                  <MapPin className="w-5 h-5 text-gold" />
                  Prizren, Kosovë
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Gashi Grand Complex. Të gjitha të drejtat e rezervuara.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Created by: Lumbardh Gashi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
