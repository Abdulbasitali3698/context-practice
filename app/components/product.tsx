"use client"

import React, { useState } from 'react';
import { Box, Button, Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useCart } from '../context/page';  
const products = [
  {
    "id": 1,
    "name": "Living Room Sofa",
    "description": "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    "price": "$450",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    "id": 2,
    "name": "Office Chair",
    "description": "Ergonomic office chair with lumbar support and mesh back for breathability.",
    "price": "$250",
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=668&q=80"
  },
  {
    "id": 3,
    "name": "Bedroom Set",
    "description": "A complete bedroom set that brings a serene and calm atmosphere to any sleeping space.",
    "price": "$1200",
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=668&q=80"
  }
];

export default function Product() {
  const { addToCart, removeFromCart, products:cartProduct} = useCart();
  const [addedToCart, setAddedToCart] = useState(new Array(products.length).fill(false));

  const handleAddToCart = (index: number) => {
    const product = products[index];
    addToCart(product.id, product.name);
    setAddedToCart(addedToCart.map((item, idx) => idx === index ? true : item));
  };

  const handleRemoveFromCart = (index: number) => {
    const product = products[index];
    removeFromCart(product.id);
    setAddedToCart(addedToCart.map((item, idx)=> idx ===index ? false : item));
  };

  return (
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box width="80%">
        <Box textAlign="center" height="15vh" display="flex" justifyContent="center" flexDirection="column">
          <Heading>Get Your Desire Product</Heading>
          <Text>Quality in a service or product is not what you put into it.</Text>
        </Box>
        <Box paddingTop="50px" display="flex" gap={5} justifyContent="center" flexWrap="wrap">
          {products.map((product, index) => (
              <Card key={product.id} maxW='sm' width="30%">
                <CardBody>
                  <Image
                    src={product.image}
                    alt={product.name}
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{product.name}</Heading>
                    <Text>{product.description}</Text>
                    <Flex justifyContent="space-between">
                      <Text color='blue.600' fontSize='2xl'>
                        {product.price}
                      </Text>
                      {addedToCart[index] ? (
                        <Button variant='ghost' colorScheme='red' onClick={() => handleRemoveFromCart(index)}>
                          Remove from cart
                        </Button>
                      ) : (
                        <Button variant='ghost' colorScheme='blue' onClick={() => handleAddToCart(index)}>
                          Add to cart
                        </Button>
                      )}
                    </Flex>
                  </Stack>
                </CardBody>
              </Card>
            ))}
        </Box>
      </Box>
    </Box>
  );
}
