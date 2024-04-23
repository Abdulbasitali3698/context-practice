"use client"
import { Box, Heading, SimpleGrid, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

// Import product data
const productsData = [
  {
    "id": 1,
    "name": "Living Room Sofa",
    "price": "$450",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    "id": 2,
    "name": "Office Chair",
    "price": "$250",
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=668&q=80"
  },
  {
    "id": 3,
    "name": "Bedroom Set",
    "price": "$1200",
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=668&q=80"
  }
];

export default function Products() {
  const [counters, setCounters] = useState(productsData.map(() => 0)); // Initializes a counter for each product

  const increment = (index: number) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  };

  const decrement = (index: number) => {
    const newCounters = [...counters];
    if (newCounters[index] > 0) {
      newCounters[index] -= 1;
    }
    setCounters(newCounters);
  };

  return (
    <Box>
      <Heading textAlign="center">Products</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={6}>
        {productsData.map((product, index) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <img src={product.image} alt={product.name} />
            <Box p="6">
              <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" mr="2">
                {product.price}
              </Text>
              <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {product.name}
              </Text>
              <Box>
                <Button mr={2} onClick={() => decrement(index)}>-</Button>
                <Text as="span">{counters[index]}</Text>
                <Button ml={2} onClick={() => increment(index)}>+</Button>
              </Box>
              <Button mt={4} variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
