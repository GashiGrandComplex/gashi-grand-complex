import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage1 from '@/assets/hero-1.png';
import heroImage2 from '@/assets/hero-2.png';
import heroImage3 from '@/assets/hero-3.png';
import heroImage4 from '@/assets/hero-4.png';
import heroImage5 from '@/assets/hero-5.png';

const heroImages = [
  { src: heroImage1, alt: 'Gashi Grand Complex - Ndërtesa në mbrëmje' },
  { src: heroImage2, alt: 'Gashi Grand Complex - Pamje e kompleksit' },
  { src: heroImage3, alt: 'Gashi Grand Complex - Objektet dhe hapësira të gjelbra' },
  { src: heroImage4, alt: 'Gashi Grand Complex - Parkingu dhe sheshet' },
  { src: heroImage5, alt: 'Gashi Grand Complex - Fasada dhe dyqanet' },
];

const SLIDE_DURATION_MS = 2500; // 2.5 sekonda

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[100dvh] min-h-[700px] overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
            exit={{ 
              opacity: 0, 
              scale: 1.05,
              transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/25 to-charcoal/75 pointer-events-none" />
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

      {/* Slide indicators */}
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Shiko slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className="group p-1.5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'w-8 bg-gold'
                  : 'w-1.5 bg-primary-foreground/50 group-hover:bg-primary-foreground/70'
              }`}
            />
          </button>
        ))}
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
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">2+</div>
              <div className="text-primary-foreground/70 text-sm md:text-base">Objekte të Ndërtuara</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">17+</div>
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
        className="absolute bottom-32 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-gold transition-colors duration-300 z-10"
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
