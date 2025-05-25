export enum Category {
  Coworking,
  Libraries,
  BudgetFood,
  Cafes,
  Entertainment,
  Sports,
  CulturalPlaces
}

export const CategoryNames: Record<Category, string> = {
  [Category.Coworking]: "Коворкінг",
  [Category.Libraries]: "Бібліотеки",
  [Category.BudgetFood]: "Бюджетне харчування",
  [Category.Cafes]: "Кафе",
  [Category.Entertainment]: "Розваги",
  [Category.Sports]: "Спорт",
  [Category.CulturalPlaces]: "Культурні місця"
};