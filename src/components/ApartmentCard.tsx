import { motion } from 'framer-motion';
import { Maximize2, Building2, BedDouble, Sun, Check } from 'lucide-react';

interface ApartmentCardProps {
  name: string;
  size: string;
  floor: string;
  rooms: string;
  hasTerrace?: boolean;
  index: number;
  features?: string[];
}

export const ApartmentCard = ({ 
  name, 
  size, 
  floor, 
  rooms, 
  hasTerrace, 
  index,
  features = ["Ngrohje qendrore", "Parking", "Ashensor"]
}: ApartmentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-gold transition-all duration-500 border border-border hover:border-gold/50"
    >
      {/* Floor Plan Placeholder */}
      <div className="relative h-56 bg-gradient-to-br from-muted to-secondary overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Building2 className="w-20 h-20 text-gold/30" />
        </div>
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <span className="bg-charcoal/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {floor}
          </span>
          {hasTerrace && (
            <span className="bg-gold text-charcoal text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Sun className="w-3 h-3" />
              Me Tarracë
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-gold transition-colors duration-300">
            {name}
          </h3>
          <span className="bg-gold/10 text-gold text-sm font-semibold px-3 py-1 rounded-lg flex items-center gap-1">
            <BedDouble className="w-4 h-4" />
            {rooms}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-secondary/50 rounded-xl p-3 text-center">
            <Maximize2 className="w-5 h-5 text-gold mx-auto mb-1" />
            <span className="text-xs text-muted-foreground block">Sipërfaqja</span>
            <span className="font-bold text-foreground">{size}</span>
          </div>
          <div className="bg-secondary/50 rounded-xl p-3 text-center">
            <Building2 className="w-5 h-5 text-gold mx-auto mb-1" />
            <span className="text-xs text-muted-foreground block">Kati</span>
            <span className="font-bold text-foreground">{floor}</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-gold" />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
