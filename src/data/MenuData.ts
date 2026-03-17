export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'Coffee' | 'Pastries' | 'Breakfast';
  image: string;
}

export const menuData: MenuItem[] = [
  {
    id: 1,
    name: "Artisan Caffe Latte",
    description: "Rich espresso combined with steamed milk and a thin layer of velvety foam, topped with intricate latte art.",
    price: "$4.50",
    category: "Coffee",
    image: "/coffee_latte_premium.png"
  },
  {
    id: 2,
    name: "Golden Butter Croissant",
    description: "Traditional French-style flaky pastry, made with high-quality butter and baked to a perfect golden crisp.",
    price: "$3.75",
    category: "Pastries",
    image: "/croissant_pastry_premium.png"
  },
  {
    id: 3,
    name: "Double Espresso",
    description: "A concentrated burst of flavor, our signature blend extracted to perfection.",
    price: "$3.00",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Pain au Chocolat",
    description: "Buttery pastry dough filled with premium dark chocolate batons.",
    price: "$4.25",
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Avocado & Egg Sourdough",
    description: "Smashed avocado, organic poached egg, and chili flakes on toasted artisan sourdough.",
    price: "$12.50",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800"
  }
];
