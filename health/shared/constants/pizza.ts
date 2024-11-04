export const mapPizzaSize = {
  20: 'Плановый',
  30: 'Систематическая',
  40: 'Срочная',
} as const;

export const mapPizzaType = {
  1: 'На месте',
  2: 'Выезд',
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  name,
  value,
}));

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
  name,
  value,
}));

export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaType = keyof typeof mapPizzaType;
