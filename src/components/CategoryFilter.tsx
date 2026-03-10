import { motion } from 'framer-motion';
import { categories } from '@/data/menuData';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            activeCategory === category.id
              ? 'bg-primary text-primary-foreground shadow-soft'
              : 'bg-card text-foreground hover:bg-muted border border-border'
          }`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;
