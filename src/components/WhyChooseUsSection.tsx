import { motion } from 'framer-motion';
import { Shield, Award, Clock, Headphones, MapPin, Leaf } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: "Cilësi e Garantuar",
    description: "Materialet më të mira dhe standarde evropiane të ndërtimit për jetëgjatësi maksimale."
  },
  {
    icon: Award,
    title: "17+ Vite Eksperiencë",
    description: "Kompania jonë ka realizuar me sukses dhjetëra projekte rezidenciale në Kosovë."
  },
  {
    icon: Clock,
    title: "Dorëzim në Kohë",
    description: "Respektojmë afatet dhe dorëzojmë projektet sipas planit të përcaktuar."
  },
  {
    icon: Headphones,
    title: "Mbështetje 24/7",
    description: "Ekipi ynë është gjithmonë në dispozicion për t'ju ndihmuar me çdo pyetje."
  },
  {
    icon: MapPin,
    title: "Lokacion Premium",
    description: "Në zemër të Prizrenit, afër të gjitha shërbimeve dhe infrastrukturës kryesore."
  },
  {
    icon: Leaf,
    title: "Dizajn Ekologjik",
    description: "Ndërtime të qëndrueshme me efikasitet të lartë energjetik dhe materiale miqësore."
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D7AF4D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Pse Ne?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Arsyet për të na{' '}
            <span className="text-gold">Zgjedhur</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Me përkushtim ndaj cilësisë dhe kujdesit ndaj klientëve, 
            ofrojmë një përvojë të pakrahasueshme të blerjes së shtëpisë.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};