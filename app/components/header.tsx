"use client"
import React from 'react';
import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Heading, IconButton, Link, Text, useDisclosure } from '@chakra-ui/react';
import { FaCartArrowDown, FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from '../context/page'; 

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { products, increaseProductQuantity, decreaseProductQuantity } = useCart(); 

  return (
    <><Box height="100px" display="grid" border="1px" borderColor="#8080805e">
      <Flex justifyContent="space-between" alignItems="center" padding="0px 150px">
        <Heading>Header</Heading>
        <Link  onClick={onOpen} style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            icon={<FaCartArrowDown />}
            aria-label='Shopping Cart'
            bg="none" />
          <Text marginLeft="2" fontSize="lg">{products.reduce((total, product )=> total + product.quantity,0)}</Text> {/* Display the item count */}
        </Link>
      </Flex>
    </Box>
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose} 
    >
        <DrawerOverlay />
        <DrawerContent>
        <DrawerContent>
          <DrawerCloseButton />
          <Box p={5}>
          <>
            {products.map(product=>(
              <Flex key={product.id} alignItems="center" marginTop={4}>
                <IconButton icon={<FaMinus/>}  aria-label="decrease quantity" onClick={()=>decreaseProductQuantity(product.id)}/>
                <Text fontSize="large" marginX={4}>{product.name}:{product.quantity}</Text>
                <IconButton icon={<FaPlus/>}  aria-label="decrease quantity" onClick={()=>increaseProductQuantity(product.id) }/>
              </Flex>
            ))}
            {/* <Text fontSize="lg">You have {itemCount} items in your cart.</Text>
            <Flex alignItems="center" mt={4}>
              <IconButton icon={<FaMinus />} aria-label="Remove Item" onClick={decreaseItemCount} />
              <Text fontSize="lg" mx={4}>{itemCount}</Text>
              <IconButton icon={<FaPlus />} aria-label="Add Item" onClick={increaseItemCount} />
            </Flex> */}
          </>
          </Box>
        </DrawerContent>
        </DrawerContent>
      </Drawer>
      </>
  );
}
