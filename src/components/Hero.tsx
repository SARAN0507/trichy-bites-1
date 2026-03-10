import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-food.jpg';

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="South Indian Thali"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-accent/90 text-accent-foreground rounded-full text-sm font-medium mb-6">
            🌿 Authentic South Indian Cuisine
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight"
        >
          Welcome to{' '}
          <span className="text-gradient-gold">Trichy Foods</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-cream/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Experience the rich flavors of South India with our handcrafted dishes made from
          traditional recipes passed down through generations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToMenu}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
          >
            Explore Our Menu
          </button>
          <a
            href="tel:+919876543210"
            className="px-8 py-4 border-2 border-cream/50 text-cream rounded-full font-semibold text-lg hover:bg-cream/10 transition-all"
          >
            Call to Order
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToMenu}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-cream/70 hover:text-cream transition-colors"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
