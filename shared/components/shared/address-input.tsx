'use client'

import React from 'react'
import { AddressSuggestions } from 'react-dadata'
import 'react-dadata/dist/react-dadata.css'

interface Props {
  onChange?: (value?: string) => void
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="1eddd6e042ba96892f417b7e5e1c31f12c0f0dfb"
      onChange={(data) => onChange?.(data?.value)}
    />
  )
}
