import { ProductItem, Ingredient } from '@prisma/client'
import { PizzaType, PizzaSize, mapPizzaType } from '../constants'
import { calcTotalPizzaPrice } from './calc-total-pizza-price'

/**
 * Calculate total price of a pizza.
 * @param type - Type of the pizza.
 * @param size - Size of the pizza.
 * @param items - List of all available pizza items.
 * @param ingredients - List of all available pizza ingredients.
 * @param selectedIngredients - Set of selected ingredients' IDs.
 *
 * @returns Object with total price of the pizza and a string with size and type
 * of pizza.
 */
export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  )
  const textDetaills = `${size} см, ${mapPizzaType[type]} пицца`

  return { totalPrice, textDetaills }
}
