import { motion } from 'framer-motion';
import { ShoppingCart, Phone, MapPin } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const { totalItems } = useCart();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍛</span>
            <div>
              <h1 className="font-serif text-xl md:text-2xl font-bold text-primary">
                Trichy Foods
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Authentic South Indian Cuisine
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Trichy, Tamil Nadu</span>
            </div>
          </div>

          <Button
            onClick={onCartClick}
            variant="outline"
            className="relative border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="ml-2 hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold"
              >
                {totalItems}
              </motion.span>
            )}
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
