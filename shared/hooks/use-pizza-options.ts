import React from 'react'
import { Variant } from '../components/shared/group-variants'
import { PizzaSize, PizzaType } from '../constants'
import { useSet } from 'react-use'
import { getAvailablePizzaSizes } from '../lib'
import { ProductItem } from '@prisma/client'

interface ReturnProps {
  size: PizzaSize
  type: PizzaType
  selectedIngredients: Set<number>
  availableSizes: Variant[]
  setSize: (size: PizzaSize) => void
  setType: (type: PizzaType) => void
  addIngredient: (id: number) => void
}
/**
 * Hook to manage pizza options.
 *
 * @param {ProductItem[]} items - List of all available pizza items.
 *
 * @returns Object with the following properties:
 *   - size: current selected size of the pizza
 *   - type: current selected type of the pizza
 *   - selectedIngredients: set of selected ingredients' IDs
 *   - availableSizes: list of available sizes for the selected pizza type
 *   - setSize: function to set the selected size of the pizza
 *   - setType: function to set the selected type of the pizza
 *   - addIngredient: function to add an ingredient to the set of selected ingredients
 */
export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSize>(20)
  const [type, setType] = React.useState<PizzaType>(1)
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  )
  const availableSizes = getAvailablePizzaSizes(type, items)

  React.useEffect(() => {
    const isAvailabeSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    )
    const availableSize = availableSizes?.find((item) => !item.disabled)

    if (!isAvailabeSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize)
    }
  }, [type])

  return {
    size,
    type,
    selectedIngredients,
    availableSizes,
    setSize,
    setType,
    addIngredient,
  }
}
