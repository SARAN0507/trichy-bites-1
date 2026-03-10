export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  spiceLevel?: 'mild' | 'medium' | 'spicy';
}

export interface CartItem extends Dish {
  quantity: number;
}

export interface OrderDetails {
  name: string;
  phone: string;
  address: string;
  area: string;
}

export const TRICHY_AREAS = [
  'Srirangam',
  'Thillai Nagar',
  'K.K. Nagar',
  'Woraiyur',
  'Cantonment',
  'Puthur',
  'Tennur',
  'Kattur',
  'Ariyamangalam',
  'Palakkarai',
  'Theppakulam',
  'Rockfort',
  'Gandhi Market',
  'Khajamalai',
  'Mannarpuram',
] as const;
