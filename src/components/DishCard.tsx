import { motion } from 'framer-motion';
import { Plus, Flame } from 'lucide-react';
import { Dish } from '@/types/menu';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

interface DishCardProps {
  dish: Dish;
  index: number;
}

const DishCard = ({ dish, index }: DishCardProps) => {
  const { addToCart } = useCart();

  const spiceLevelColors = {
    mild: 'text-leaf',
    medium: 'text-accent',
    spicy: 'text-spice',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 border border-border"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
              dish.isVeg ? 'bg-leaf text-cream' : 'bg-spice text-cream'
            }`}
          >
            {dish.isVeg ? '●' : '●'}
          </span>
        </div>
        {dish.spiceLevel && (
          <div className="absolute top-3 right-3">
            <span
              className={`flex items-center gap-1 px-2 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium ${
                spiceLevelColors[dish.spiceLevel]
              }`}
            >
              <Flame className="h-3 w-3" />
              {dish.spiceLevel}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
          {dish.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {dish.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">₹{dish.price}</span>
          <Button
            onClick={() => addToCart(dish)}
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DishCard;
