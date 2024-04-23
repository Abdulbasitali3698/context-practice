"use client"
import React from 'react';
import { Box, Flex, Heading, Text, IconButton } from '@chakra-ui/react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useCart } from '../context/page';
import Header from '../components/header';

export default function Cart() {
  const { products, increaseProductQuantity, decreaseProductQuantity, removeFromCart } = useCart();

  return (
    <>
      <Header />
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Box width="80%">
          <Box textAlign="center" height="15vh" display="flex" justifyContent="center" flexDirection="column">
            <Heading>Your Shopping Cart</Heading>
          </Box>
          <Flex direction="column" alignItems="center" m="5">
            {products.length === 0 ? ( // Check if the products array is empty
              <Text fontWeight="bold" fontSize="lg">Your cart is empty.</Text> // Render a message if the cart is empty
            ) : (
              products.map((product) => ( // Otherwise, map through the products array
                <Flex key={product.id} p="4" borderWidth="1px" borderRadius="lg" width="80%" justifyContent="space-between" alignItems="center">
                  <Text fontWeight="bold">{product.name}</Text>
                  <Flex alignItems="center">
                    <IconButton icon={<FaMinus />} aria-label="Decrease quantity" onClick={() => decreaseProductQuantity(product.id)} />
                    <Text mx="2">{product.quantity}</Text>
                    <IconButton icon={<FaPlus />} aria-label="Increase quantity" onClick={() => increaseProductQuantity(product.id)} />
                    <IconButton ml="4" colorScheme="red" aria-label="Remove item" icon={<FaTrash />} onClick={() => removeFromCart(product.id)} />
                  </Flex>
                </Flex>
              ))
            )}
          </Flex>
        </Box>
      </Box>
    </>
  );
}
