"use client"
import React from 'react';
import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Heading, IconButton, Text, Link, useDisclosure } from '@chakra-ui/react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useCart } from '../context/page'; 
import Header from '../components/header';


export default function Cart() {
  const { products, increaseProductQuantity, decreaseProductQuantity, removeFromCart } = useCart(); 
  const { isOpen, onOpen, onClose } = useDisclosure(); 

  return (
    <>
      <Header />
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Box width="80%">
          <Box textAlign="center" height="15vh" display="flex" justifyContent="center" flexDirection="column">
            <Heading>Your Shopping Cart</Heading>
          </Box>
          <Flex direction="column" alignItems="center" m="5">
            {products.map((product) => (
              <Flex key={product.id} p="4" borderWidth="1px" borderRadius="lg" width="80%" justifyContent="space-between" alignItems="center">
                <Text fontWeight="bold">{product.name}</Text>
                <Flex alignItems="center">
                  <IconButton icon={<FaMinus />} aria-label="Decrease quantity" onClick={() => decreaseProductQuantity(product.id)} />
                  <Text mx="2">{product.quantity}</Text>
                  <IconButton icon={<FaPlus />} aria-label="Increase quantity" onClick={() => increaseProductQuantity(product.id)} />
                  <IconButton ml="4" colorScheme="red" aria-label="Remove item" icon={<FaTrash />} onClick={() => removeFromCart(product.id)} />
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
}
