import { motion } from 'framer-motion';
import { 
  Car, 
  Shield, 
  Wifi, 
  Flower2, 
  Baby, 
  Dumbbell,
  TreePine,
  Zap,
  Droplets,
  Wind
} from 'lucide-react';

const amenities = [
  { icon: Car, label: "Parking Privat" },
  { icon: Shield, label: "Siguri 24/7" },
  { icon: Wifi, label: "Internet Fibër" },
  { icon: Flower2, label: "Kopshte të Gjelbëra" },
  { icon: Baby, label: "Këndi i Fëmijëve" },
  { icon: Dumbbell, label: "Salla Fitnesi" },
  { icon: TreePine, label: "Zona Rekreative" },
  { icon: Zap, label: "Panele Diellore" },
  { icon: Droplets, label: "Ujë i Ngrohtë Qendror" },
  { icon: Wind, label: "Ventilim Modern" },
];

export const AmenitiesSection = () => {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Komoditetet
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Gjithçka që{' '}
            <span className="text-gold">Keni Nevojë</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Kompleksi ynë ofron të gjitha komoditetet moderne për një jetesë 
            komode dhe luksoze për ju dhe familjen tuaj.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-gold transition-all duration-500 border border-border hover:border-gold/30"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <amenity.icon className="w-8 h-8 text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-medium text-foreground text-sm">
                {amenity.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-charcoal to-charcoal/90 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Dëshironi të vizitoni kompleksin?
            </h3>
            <p className="text-gray-400">
              Caktoni një takim dhe eksploroni banesën tuaj të ardhshme personalisht.
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-charcoal font-semibold px-8 py-4 rounded-xl whitespace-nowrap hover:bg-gold-light transition-colors duration-300"
          >
            Cakto Takimin
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};