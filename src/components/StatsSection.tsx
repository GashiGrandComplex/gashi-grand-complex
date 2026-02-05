import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Building, Home, Calendar, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon, value, suffix = '', label, delay }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center p-8 rounded-2xl bg-card shadow-card border border-border hover:border-gold/30 hover:shadow-gold transition-all duration-500 group"
    >
      <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="font-display text-5xl font-bold text-foreground mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const stats = [
    { icon: <Home className="w-8 h-8 text-charcoal" />, value: 91, suffix: '+', label: 'Banesa të Shitura' },
    { icon: <Building className="w-8 h-8 text-charcoal" />, value: 2, label: 'Objekte të Ndërtuara' },
    { icon: <Calendar className="w-8 h-8 text-charcoal" />, value: 17, suffix: '+', label: 'Vite Përvojë' },
    { icon: <Award className="w-8 h-8 text-charcoal" />, value: 100, suffix: '%', label: 'Kënaqësi' },
  ];

  return (
    <section id="stats" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Arritjet Tona
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Numrat Flasin Vetë
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Me dekada përvojë në industrinë e ndërtimit, kemi krijuar 
            besim dhe cilësi në çdo projekt tonë.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              {...stat}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
