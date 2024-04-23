"use client"
import { Box, Button, Heading, List, ListItem, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

// Sample cart items (you can replace this with dynamic items passed through context or props in a real app)
const initialCartItems = [
  {
    id: 1,
    name: "Living Room Sofa",
    price: 450,
    quantity: 1,
  },
  {
    id: 2,
    name: "Office Chair",
    price: 250,
    quantity: 2,
  }
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        const updatedQuantity = item.quantity + delta;
        return {...item, quantity: updatedQuantity > 0 ? updatedQuantity : 0};
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box p={5}>
      <Heading mb={4}>Your Cart</Heading>
      <List spacing={3}>
        {cartItems.map(item => (
          <ListItem key={item.id}>
            <Text fontWeight="bold">{item.name}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Button mr={2} onClick={() => updateQuantity(item.id, -1)}>-</Button>
            <Button onClick={() => updateQuantity(item.id, 1)}>+</Button>
            <Button ml={2} colorScheme="red" onClick={() => removeItem(item.id)}>Remove</Button>
          </ListItem>
        ))}
      </List>
      <Text mt={4} fontSize="xl">
        Total: ${total.toFixed(2)}
      </Text>
    </Box>
  );
}

export default Cart;
