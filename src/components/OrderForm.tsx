import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, User, Phone, CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { TRICHY_AREAS, OrderDetails } from '@/types/menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderForm = ({ isOpen, onClose }: OrderFormProps) => {
  const { cart, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<OrderDetails>({
    name: '',
    phone: '',
    address: '',
    area: '',
  });
  const [errors, setErrors] = useState<Partial<OrderDetails>>({});

  const validateForm = () => {
    const newErrors: Partial<OrderDetails> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit mobile number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    } else if (formData.address.trim().length < 10) {
      newErrors.address = 'Please enter a complete address';
    }

    if (!formData.area) {
      newErrors.area = 'Please select your area';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate order submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSuccess(true);
    setIsSubmitting(false);

    toast({
      title: 'Order Placed Successfully! 🎉',
      description: `Thank you ${formData.name}! Your order will be delivered soon.`,
    });

    // Reset after 3 seconds
    setTimeout(() => {
      clearCart();
      setIsSuccess(false);
      setFormData({ name: '', phone: '', address: '', area: '' });
      onClose();
    }, 3000);
  };

  const deliveryCharge = totalPrice > 300 ? 0 : 30;
  const grandTotal = totalPrice + deliveryCharge;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:w-full bg-background rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center p-12 text-center h-full min-h-[400px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-leaf/20 flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="h-10 w-10 text-leaf" />
                  </motion.div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Order Confirmed!
                  </h3>
                  <p className="text-muted-foreground">
                    Your delicious food is being prepared and will be delivered soon.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="form" className="h-full max-h-[90vh] overflow-y-auto">
                  <div className="sticky top-0 bg-background flex items-center justify-between p-4 border-b border-border z-10">
                    <h2 className="font-serif text-xl font-bold">Complete Your Order</h2>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-muted rounded-full transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    {/* Order Summary */}
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h3 className="font-medium mb-3">Order Summary</h3>
                      <div className="space-y-2 text-sm">
                        {cart.map((item) => (
                          <div key={item.id} className="flex justify-between">
                            <span>
                              {item.name} × {item.quantity}
                            </span>
                            <span>₹{item.price * item.quantity}</span>
                          </div>
                        ))}
                        <div className="border-t border-border pt-2 mt-2">
                          <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>₹{totalPrice}</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>Delivery</span>
                            <span>
                              {deliveryCharge === 0 ? (
                                <span className="text-leaf">FREE</span>
                              ) : (
                                `₹${deliveryCharge}`
                              )}
                            </span>
                          </div>
                          {deliveryCharge > 0 && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Free delivery on orders above ₹300
                            </p>
                          )}
                          <div className="flex justify-between font-bold text-lg mt-2">
                            <span>Total</span>
                            <span className="text-primary">₹{grandTotal}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Delivery Details */}
                    <div className="space-y-4">
                      <h3 className="font-medium flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        Delivery Details
                      </h3>

                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <User className="h-4 w-4" /> Full Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && (
                          <p className="text-destructive text-xs">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="h-4 w-4" /> Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value.replace(/\D/g, '').slice(0, 10),
                            })
                          }
                          className={errors.phone ? 'border-destructive' : ''}
                        />
                        {errors.phone && (
                          <p className="text-destructive text-xs">{errors.phone}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="area">Area in Trichy</Label>
                        <Select
                          value={formData.area}
                          onValueChange={(value) =>
                            setFormData({ ...formData, area: value })
                          }
                        >
                          <SelectTrigger
                            className={errors.area ? 'border-destructive' : ''}
                          >
                            <SelectValue placeholder="Select your area" />
                          </SelectTrigger>
                          <SelectContent>
                            {TRICHY_AREAS.map((area) => (
                              <SelectItem key={area} value={area}>
                                {area}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.area && (
                          <p className="text-destructive text-xs">{errors.area}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Full Address</Label>
                        <Textarea
                          id="address"
                          placeholder="House/Flat no, Street, Landmark..."
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({ ...formData, address: e.target.value })
                          }
                          className={errors.address ? 'border-destructive' : ''}
                          rows={3}
                        />
                        {errors.address && (
                          <p className="text-destructive text-xs">{errors.address}</p>
                        )}
                      </div>
                    </div>

                    <div className="bg-accent/20 text-accent-foreground rounded-lg p-3 text-sm">
                      <p className="font-medium">💳 Payment on Delivery</p>
                      <p className="text-muted-foreground text-xs mt-1">
                        Cash or UPI payment upon delivery
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || cart.length === 0}
                      className="w-full py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {isSubmitting ? (
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                        >
                          Placing Order...
                        </motion.span>
                      ) : (
                        `Place Order • ₹${grandTotal}`
                      )}
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderForm;
