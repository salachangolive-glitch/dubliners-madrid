/**
 * Dubliners menu — transcribed ONLY from owner photos /workspace/cartas-pubs-2026-10-13/ (13 Oct 2026).
 * c1 = carta-1-arroces-platos, c2 = carta-2-raciones-tapas, c3 = carta-3-carta-completa.
 * en = translation printed on a photo; omitted when not printed or when photos disagree.
 * Items where photos disagree / illegible are left OUT (see /workspace/dubliners-carta-2026-10-13/REPORT.md).
 * No allergens on web (icons not transcribed). Prices in €.
 */
export type MenuItem = { es: string; en?: string; descEs?: string; descEn?: string; price: number; src: string };
export type MenuSection = { en: string; es: string; items: MenuItem[] };

export const MENU: MenuSection[] = [
  { en: 'Rice dishes', es: 'Arroces', items: [
    { es: 'Arroz mixto en su punto', en: 'Mixed rice with seafood and chicken', price: 15, src: 'c1, c3' },
    { es: 'Arroz de mariscos en su punto', en: 'Rice seafood', price: 15, src: 'c1, c3' },
    { es: 'Arroz negro con alioli', en: 'Black rice with aioli', price: 15, src: 'c1' },
  ]},
  { en: 'Raciones & tapas', es: 'Raciones y tapas', items: [
    { es: 'Aros de cebolla empanados con salsa ranchera', en: 'Breaded onion rings with ranch sauce', price: 9, src: 'c2 / carta-2b' },
    { es: 'Quesadillas con guacamole', en: 'Quesadillas with guacamole', price: 9, src: 'c2' },
    { es: 'Gildas 6 uds.', en: 'Basque skewers', price: 15, src: 'c2' },
    { es: 'Pulpo a la gallega', en: 'Galician-style octopus', price: 23, src: 'c2, c3' },
    { es: 'Callos a la madrileña', en: 'Madrid style', price: 16, src: 'c2, c3' },
    { es: 'Jamón ibérico de bellota', en: 'Iberian ham', price: 24, src: 'c2, c3' },
    { es: 'Queso manchego', en: 'Manchego cheese', price: 12, src: 'c2' },
    { es: 'Ensaladilla rusa', en: 'Russian salad', price: 10, src: 'c2, c3' },
    { es: 'Tortilla de patatas', en: 'Potato omelette', price: 8, src: 'c2, c3' },
    { es: 'Calamares a la romana', en: 'Roman style squid', price: 16, src: 'c2, c3' },
    { es: 'Torreznos de Soria', en: 'Torreznos de Soria', price: 17, src: 'c2, c3' },
    { es: 'Chorizo casero', en: 'Homemade chorizo', price: 12, src: 'c2' },
    { es: 'Croquetas caseras 6 uds.', en: 'Homemade croquettes', price: 11, src: 'c2, c3' },
    { es: 'Huevos estrellados con jamón ibérico', en: 'Fried eggs with Iberian ham', price: 14, src: 'c2, c3 (EN per DG, carta-2b)' },
    { es: 'Nachos con guacamole (carne y queso)', en: 'Nachos with guacamole (meat and cheese)', price: 12, src: 'c2, c3' },
    { es: 'Pimientos de Padrón', en: 'Padron peppers', price: 12, src: 'c2, c3' },
    { es: 'Patatas bravas o alioli', en: 'Bravas potatoes or alioli', price: 9, src: 'c2, c3' },
    { es: 'Gambón al ajillo', en: 'Shrimp with garlic', price: 17, src: 'c2, c3' },
    { es: 'Alitas de pollo', en: 'Chicken wings', price: 12, src: 'c1, c3' },
    { es: 'Finger de pollo', en: 'Chicken fingers', price: 10, src: 'c1, c3' },
    { es: 'Mejillones a la marinera', en: 'Seafood-style mussels', price: 16, src: 'c1, c3' },
    { es: 'Salmorejo', en: 'Cold Andalusian soup', price: 10, src: 'c1, c3' },
  ]},
  { en: 'Salads', es: 'Ensaladas', items: [
    { es: 'Ensalada César con pollo', en: 'Caesar salad', price: 14, src: 'c2, c3' },
    { es: 'Ensalada de lechuga y tomate', en: 'Lettuce and tomato salad', price: 8, src: 'c2, c3' },
    { es: 'Ensalada de la casa', en: 'House of salad', price: 12, src: 'c1, c3' },
    { es: 'Burrata con pesto', price: 13, src: 'c3' },
  ]},
  { en: 'Burgers, pasta & pizza', es: 'Hamburguesas, pasta y pizza', items: [
    { es: 'Hamburguesa Black Angus', en: 'Black angus burger', price: 18, src: 'c1, c3' },
    { es: 'Lasaña estilo italiano', en: 'Classic italian lasagna', price: 12, src: 'c1, c3' },
    { es: 'Pizza 3 quesos', en: '3 Cheese Pizza', price: 16, src: 'c1' },
    { es: 'Pizza de jamón y queso', en: 'Ham & cheese pizza', descEs: 'Salsa de tomate, jamón york, mozarella y orégano', descEn: 'Tomato sauce, ham, mozzarella and fresh oregano', price: 16, src: 'c3' },
    { es: 'Pizza cuatro estaciones', en: 'Four seasons pizza', descEs: 'Salsa de tomate, jamón york, bacon, champiñón, mozarella y orégano', descEn: 'Tomato sauce, ham, bacon, mushrooms, mozzarella and fresh oregano', price: 16, src: 'c3' },
  ]},
  { en: 'Main dishes', es: 'Platos principales', items: [
    { es: 'Pollo al curry', price: 19, src: 'c1, c3 (EN differs)' },
    { es: 'Salmón a la parrilla', en: 'Grilled salmon', descEs: 'Con patatas fritas', descEn: 'Served with french fries', price: 18, src: 'c3' },
    { es: 'Rabo de toro', price: 19, src: 'c1, c3 (EN differs)' },
  ]},
  { en: 'House specials', es: 'Especialidades de la casa', items: [
    { es: 'Desayuno irlandés', en: 'Irish Breakfast', descEs: 'Salchichas irlandesas, bacon, tomate a la plancha, champiñones, morcilla, alubias tostadas, huevos fritos y patatas fritas', descEn: 'Irish sausages, bacon rashers, grilled tomatoes, mushrooms, black pudding, baked beans, fried eggs and chips', price: 12, src: 'c3' },
    { es: 'Entrecot de vaca madurado', en: 'Sirloin steak dry aged', descEs: 'Con patatas fritas', descEn: 'Served with potatoes', price: 23, src: 'c3' },
    { es: 'Costillar a la barbacoa', en: 'BBQ ribs', descEs: 'Con patatas fritas', descEn: 'Served with french fries', price: 21, src: 'c1 (errata «Cotillar»), c3' },
    { es: 'Judiones de la granja', price: 10, src: 'c3' },
  ]},
  { en: 'Desserts', es: 'Postres', items: [
    { es: 'Tarta de queso', price: 6, src: 'c3' },
    { es: 'Brownie de chocolate', price: 5, src: 'c3' },
  ]},
];
