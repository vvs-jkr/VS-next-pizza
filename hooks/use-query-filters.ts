import React from 'react'
import { QueryFilters } from './use-filters'

export const useQueryFilters = (filters: QueryFilters) => {
  React.useEffect(() => {
    const params = {
      ...filters.prices,
      pizzaTypes: Array.from(filters.pizzaTypes),
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients),
    }
    const query = qs.stringify(params, {
      arrayFormat: 'comma',
    })

    router.push(`?${query}`, { scroll: false })
  }, [])
}
