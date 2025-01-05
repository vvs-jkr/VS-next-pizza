import { Ingredient, ProductItem } from '@prisma/client'
import { PizzaSize, PizzaType } from '../constants'

/**
 * Calculate total price of a pizza
 * 
 * @param type - Type of the pizza.
 * @param size - Size of the pizza.
 * @param items - List of all available pizza items.
 * @param ingredients - List of all available pizza ingredients.
 * @param selectedIngredients - Set of selected ingredients' IDs.
 *
 * @returns Total price of the pizza, including the price of the pizza itself and
 * all selected ingredients.
 */
export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0

  const totalIngredientsPrice = ingredients
    .filter((ingredients) => selectedIngredients.has(ingredients.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0)

  return pizzaPrice + totalIngredientsPrice
}
