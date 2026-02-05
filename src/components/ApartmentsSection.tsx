import { useState } from 'react';
import { motion } from 'framer-motion';
import { ApartmentCard } from './ApartmentCard';
import { Button } from '@/components/ui/button';
import apartmentImage from '@/assets/apartment-interior.png';

const blockAPartments = [
  { name: "Banesa A1", size: "78.65 m²", floor: "Përdhesë", rooms: "2+1", hasTerrace: true, image: apartmentImage },
  { name: "Banesa A2", size: "83.86 m²", floor: "Përdhesë", rooms: "2+1", hasTerrace: true, image: apartmentImage },
  { name: "Banesa A3", size: "52.00 m²", floor: "Kati 1", rooms: "1+1", hasTerrace: false, image: apartmentImage },
  { name: "Banesa A4", size: "78.65 m²", floor: "Kati 1", rooms: "2+1", hasTerrace: true, image: apartmentImage },
  { name: "Banesa A5", size: "83.86 m²", floor: "Kati 1", rooms: "2+1", hasTerrace: true, image: apartmentImage },
  { name: "Banesa A6", size: "52.00 m²", floor: "Kati 2", rooms: "1+1", hasTerrace: false, image: apartmentImage },
];

const blockBPartments = [
  { name: "Banesa B1", size: "92.45 m²", floor: "Përdhesë", rooms: "3+1", hasTerrace: true, image: apartmentImage },
  { name: "Banesa B2", size: "136.00 m²", floor: "Përdhesë", rooms: "4+1", hasTerrace: true, image: apartmentImage },
  { name: "Banesa B3", size: "78.20 m²", floor: "Kati 1", rooms: "2+1", hasTerrace: true, image: apartmentImage },
  { name: "Banesa B4", size: "92.45 m²", floor: "Kati 1", rooms: "3+1", hasTerrace: true, image: apartmentImage },
  { name: "Banesa B5", size: "136.00 m²", floor: "Kati 2", rooms: "4+1", hasTerrace: true, image: apartmentImage },
  { name: "Banesa B6", size: "78.20 m²", floor: "Kati 2", rooms: "2+1", hasTerrace: false, image: apartmentImage },
];

export const ApartmentsSection = () => {
  const [activeBlock, setActiveBlock] = useState<'A' | 'B'>('A');
  
  const apartments = activeBlock === 'A' ? blockAPartments : blockBPartments;

  const handleRequestCatalog = () => {
    const message = encodeURIComponent(
      'Përshëndetje! 👋\n\nDo të doja të kërkoja *katalogun e plotë* të banesave të Gashi Grand Complex – me plane, çmime dhe informacione të detajuara.\n\nFaleminderit!'
    );
    const whatsappNumber = '38345305205';
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="apartments" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Banesat Tona
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Zgjidhni Banesën Tuaj
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ofrojmë një gamë të gjerë banesash me sipërfaqe dhe konfigurime të ndryshme 
            për të përmbushur nevojat tuaja.
          </p>
        </motion.div>

        {/* Block Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          <Button
            variant={activeBlock === 'A' ? 'gold' : 'goldOutline'}
            size="lg"
            onClick={() => setActiveBlock('A')}
          >
            Blloku A
          </Button>
          <Button
            variant={activeBlock === 'B' ? 'gold' : 'goldOutline'}
            size="lg"
            onClick={() => setActiveBlock('B')}
          >
            Blloku B
          </Button>
        </motion.div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.map((apt, index) => (
            <ApartmentCard
              key={apt.name}
              {...apt}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="xl" onClick={handleRequestCatalog}>
            Kërko Katalogun
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
