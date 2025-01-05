import { CartItemDTO } from '../services/dto/cart.dto';

/**
 * Calculate total price of a cart item.
 * @param item - Cart item.
 *
 * @returns Total price of the cart item, including the price of the pizza itself and all selected ingredients.
 */
export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);

  return (ingredientsPrice + item.productItem.price) * item.quantity;
};
