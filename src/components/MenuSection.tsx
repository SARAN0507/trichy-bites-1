import { useState } from 'react';
import { motion } from 'framer-motion';
import { dishes } from '@/data/menuData';
import CategoryFilter from './CategoryFilter';
import DishCard from './DishCard';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredDishes =
    activeCategory === 'all'
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section id="menu" className="py-16 md:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Specialties
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our Menu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From crispy dosas to aromatic biryanis, discover the authentic flavors of
            South India prepared with love and tradition.
          </p>
        </motion.div>

        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredDishes.map((dish, index) => (
            <DishCard key={dish.id} dish={dish} index={index} />
          ))}
        </motion.div>

        {filteredDishes.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No dishes found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
