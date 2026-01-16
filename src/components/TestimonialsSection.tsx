import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Arben Gashi",
    role: "Pronar në Bllokun A",
    content: "Vendimi më i mirë që kemi marrë! Cilësia e ndërtimit dhe lokacioni janë të shkëlqyera. Ekipi ishte profesional dhe i gatshëm të na ndihmojë në çdo hap.",
    rating: 5
  },
  {
    name: "Florina Morina",
    role: "Pronar në Bllokun B",
    content: "Jemi shumë të kënaqur me banesën tonë të re. Hapësirat janë të projektuara mirë dhe dritaret e mëdha sjellin shumë dritë natyrore.",
    rating: 5
  },
  {
    name: "Besnik Krasniqi",
    role: "Pronar në Bllokun A",
    content: "Procesi i blerjes ishte i thjeshtë dhe transparent. Çmimet konkurruese dhe mundësia e pagesës me këste na ndihmoi shumë.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Dëshmi
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Çfarë Thonë{' '}
            <span className="text-gold">Klientët</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Lexoni përvojat e klientëve tanë të kënaqur që kanë zgjedhur 
            Gashi Grand Complex si shtëpinë e tyre të re.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-gold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};