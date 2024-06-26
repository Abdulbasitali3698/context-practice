// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { CartProvider } from './context/page'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>
            <CartProvider>
                {children}
            </CartProvider> 
        </ChakraProvider>
}