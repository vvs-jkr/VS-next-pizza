import { cn } from '@/shared/lib/utils'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui'
import { Container } from './container'
import { ArrowRight, Car, ShoppingCart, User } from 'lucide-react'
import { SearchInput } from './search-input'
import Link from 'next/link'
import { CartButton } from './cart-button'

type Props = {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Left*/}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">VS Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                Personal project
              </p>
            </div>
          </div>
        </Link>

        {/* Right */}
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="slex items-center gap-1">
            <User size={16} />
            Войти
          </Button>

          <div>
            <CartButton />
          </div>
        </div>
      </Container>
    </header>
  )
}
