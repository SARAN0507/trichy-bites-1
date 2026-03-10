import { useState } from 'react';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import CartSidebar from '@/components/CartSidebar';
import OrderForm from '@/components/OrderForm';
import Footer from '@/components/Footer';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsOrderFormOpen(true);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <main>
          <Hero />
          <MenuSection />
        </main>
        <Footer />
        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
        />
        <OrderForm
          isOpen={isOrderFormOpen}
          onClose={() => setIsOrderFormOpen(false)}
        />
      </div>
    </CartProvider>
  );
};

export default Index;
