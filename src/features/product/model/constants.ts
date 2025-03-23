export const mapProductFilter = {
  ALL: "Все",
  FAVORITE: "Избранные",
} as const;

export type ProductFilter = keyof typeof mapProductFilter;

export const productFilters = Object.entries(mapProductFilter).map(([value, name]) => ({
  value: value as ProductFilter,
  name,
}));
