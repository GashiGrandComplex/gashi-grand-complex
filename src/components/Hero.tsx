import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-building.jpg';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gashi Grand Complex - Luxury Apartments in Prizren"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <MapPin className="w-5 h-5 text-gold" />
              <span className="text-primary-foreground/80 font-medium tracking-wide">
                Prizren, Kosovë
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-bold leading-tight mb-6"
            >
              Gashi Grand
              <br />
              <span className="text-gradient-gold">Complex</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed"
            >
              Zbuloni shtëpinë tuaj të ëndrrave në kompleksin më modern të banimit në Prizren. 
              Cilësi premium dhe dizajn elegant.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="heroGold" size="xl" asChild>
                <a href="#apartments">Shiko Banesat</a>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">Kontakto Tani</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-charcoal/80 backdrop-blur-md border-t border-gold/20"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">91+</div>
              <div className="text-primary-foreground/70 text-sm md:text-base">Banesa të Shitura</div>
            </div>
            <div className="text-center border-x border-gold/20">
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">31</div>
              <div className="text-primary-foreground/70 text-sm md:text-base">Objekte të Ndërtuara</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">20+</div>
              <div className="text-primary-foreground/70 text-sm md:text-base">Vite Përvojë</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#apartments"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-gold transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.a>
    </section>
  );
};
