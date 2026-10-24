/**
 * Dubliners menu — transcribed ONLY from owner photos /workspace/cartas-pubs-2026-10-13/ (13 Oct 2026).
 * c1 = carta-1-arroces-platos, c2 = carta-2-raciones-tapas, c3 = carta-3-carta-completa.
 * en = translation printed on a photo; omitted when not printed or when photos disagree.
 * Items where photos disagree / illegible are left OUT (see /workspace/dubliners-carta-2026-10-13/REPORT.md).
 * No allergens on web (icons not transcribed). No prices on web (owner order 24 Oct 2026).
 */
export type MenuItem = { es: string; en?: string; descEs?: string; descEn?: string; src: string };
export type MenuSection = { en: string; es: string; items: MenuItem[] };

export const MENU: MenuSection[] = [
  { en: 'Rice dishes', es: 'Arroces', items: [
    { es: 'Arroz mixto en su punto', en: 'Mixed rice with seafood and chicken', src: 'c1, c3' },
    { es: 'Arroz de mariscos en su punto', en: 'Rice seafood', src: 'c1, c3' },
    { es: 'Arroz negro con alioli', en: 'Black rice with aioli', src: 'c1' },
  ]},
  { en: 'Raciones & tapas', es: 'Raciones y tapas', items: [
    { es: 'Aros de cebolla empanados con salsa ranchera', en: 'Breaded onion rings with ranch sauce', src: 'c2 / carta-2b' },
    { es: 'Quesadillas con guacamole', en: 'Quesadillas with guacamole', src: 'c2' },
    { es: 'Gildas 6 uds.', en: 'Basque skewers', src: 'c2' },
    { es: 'Pulpo a la gallega', en: 'Galician-style octopus', src: 'c2, c3' },
    { es: 'Callos a la madrileña', en: 'Madrid style', src: 'c2, c3' },
    { es: 'Jamón ibérico de bellota', en: 'Iberian ham', src: 'c2, c3' },
    { es: 'Queso manchego', en: 'Manchego cheese', src: 'c2' },
    { es: 'Ensaladilla rusa', en: 'Russian salad', src: 'c2, c3' },
    { es: 'Tortilla de patatas', en: 'Potato omelette', src: 'c2, c3' },
    { es: 'Calamares a la romana', en: 'Roman style squid', src: 'c2, c3' },
    { es: 'Torreznos de Soria', en: 'Torreznos de Soria', src: 'c2, c3' },
    { es: 'Chorizo casero', en: 'Homemade chorizo', src: 'c2' },
    { es: 'Croquetas caseras 6 uds.', en: 'Homemade croquettes', src: 'c2, c3' },
    { es: 'Huevos estrellados con jamón ibérico', en: 'Fried eggs with Iberian ham', src: 'c2, c3 (EN per DG, carta-2b)' },
    { es: 'Nachos con guacamole (carne y queso)', en: 'Nachos with guacamole (meat and cheese)', src: 'c2, c3' },
    { es: 'Pimientos de Padrón', en: 'Padron peppers', src: 'c2, c3' },
    { es: 'Patatas bravas o alioli', en: 'Bravas potatoes or alioli', src: 'c2, c3' },
    { es: 'Gambón al ajillo', en: 'Shrimp with garlic', src: 'c2, c3' },
    { es: 'Alitas de pollo', en: 'Chicken wings', src: 'c1, c3' },
    { es: 'Finger de pollo', en: 'Chicken fingers', src: 'c1, c3' },
    { es: 'Mejillones a la marinera', en: 'Seafood-style mussels', src: 'c1, c3' },
    { es: 'Salmorejo', en: 'Cold Andalusian soup', src: 'c1, c3' },
  ]},
  { en: 'Salads', es: 'Ensaladas', items: [
    { es: 'Ensalada César con pollo', en: 'Caesar salad', src: 'c2, c3' },
    { es: 'Ensalada de lechuga y tomate', en: 'Lettuce and tomato salad', src: 'c2, c3' },
    { es: 'Ensalada de la casa', en: 'House of salad', src: 'c1, c3' },
    { es: 'Burrata con pesto', src: 'c3' },
  ]},
  { en: 'Burgers, pasta & pizza', es: 'Hamburguesas, pasta y pizza', items: [
    { es: 'Hamburguesa Black Angus', en: 'Black angus burger', src: 'c1, c3' },
    { es: 'Lasaña estilo italiano', en: 'Classic italian lasagna', src: 'c1, c3' },
    { es: 'Pizza 3 quesos', en: '3 Cheese Pizza', src: 'c1' },
    { es: 'Pizza de jamón y queso', en: 'Ham & cheese pizza', descEs: 'Salsa de tomate, jamón york, mozarella y orégano', descEn: 'Tomato sauce, ham, mozzarella and fresh oregano', src: 'c3' },
    { es: 'Pizza cuatro estaciones', en: 'Four seasons pizza', descEs: 'Salsa de tomate, jamón york, bacon, champiñón, mozarella y orégano', descEn: 'Tomato sauce, ham, bacon, mushrooms, mozzarella and fresh oregano', src: 'c3' },
  ]},
  { en: 'Main dishes', es: 'Platos principales', items: [
    { es: 'Pollo al curry', src: 'c1, c3 (EN differs)' },
    { es: 'Salmón a la parrilla', en: 'Grilled salmon', descEs: 'Con patatas fritas', descEn: 'Served with french fries', src: 'c3' },
    { es: 'Rabo de toro', src: 'c1, c3 (EN differs)' },
  ]},
  { en: 'House specials', es: 'Especialidades de la casa', items: [
    { es: 'Desayuno irlandés', en: 'Irish Breakfast', descEs: 'Salchichas irlandesas, bacon, tomate a la plancha, champiñones, morcilla, alubias tostadas, huevos fritos y patatas fritas', descEn: 'Irish sausages, bacon rashers, grilled tomatoes, mushrooms, black pudding, baked beans, fried eggs and chips', src: 'c3' },
    { es: 'Entrecot de vaca madurado', en: 'Sirloin steak dry aged', descEs: 'Con patatas fritas', descEn: 'Served with potatoes', src: 'c3' },
    { es: 'Costillar a la barbacoa', en: 'BBQ ribs', descEs: 'Con patatas fritas', descEn: 'Served with french fries', src: 'c1 (errata «Cotillar»), c3' },
    { es: 'Judiones de la granja', src: 'c3' },
  ]},
  { en: 'Desserts', es: 'Postres', items: [
    { es: 'Tarta de queso', src: 'c3' },
    { es: 'Brownie de chocolate', src: 'c3' },
  ]},
];
