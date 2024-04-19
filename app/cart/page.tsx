"use client"

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Cart = () => {
  const { } = useCart();

  return (
    <Box p={5}>
      <Heading mb={4}>Your Shopping Cart</Heading>
      {itemCount > 0 ? (
        <Text fontSize="lg">You have {itemCount} items in your cart.</Text>
      ) : (
        <Text fontSize="lg">Your cart is empty.</Text>
      )}
    </Box>
  );
};

export default Cart;
