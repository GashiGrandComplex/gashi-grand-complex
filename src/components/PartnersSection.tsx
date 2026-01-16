import { motion } from 'framer-motion';

const partners = [
  { name: 'D Project', description: 'Arkitekturë & Dizajn' },
  { name: 'Growup Advertising', description: 'Marketing & Branding' },
  { name: 'Villa Tini', description: 'Hoteleri' },
  { name: 'Agimi Construction', description: 'Ndërtimtari' },
];

export const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Bashkëpunëtorët Tanë
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Partnerët Tanë
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Punojmë me profesionistët më të mirë në industri për t'ju 
            ofruar cilësinë më të lartë.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-xl border border-gold/20 hover:border-gold/50 bg-charcoal-light/50 hover:bg-charcoal-light transition-all duration-500 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <span className="font-display text-2xl font-bold text-gold">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-1 group-hover:text-gold transition-colors duration-300">
                {partner.name}
              </h3>
              <p className="text-primary-foreground/60 text-sm">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
