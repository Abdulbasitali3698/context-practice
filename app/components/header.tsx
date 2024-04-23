"use client";
import React from 'react';
import { Box, Flex, Heading, IconButton, Text, Link } from '@chakra-ui/react';
import { FaCartArrowDown } from 'react-icons/fa';
import NextLink from 'next/link'; 
import { useCart } from '../context/page'; 

export default function Header() {
  const { products } = useCart(); 

  return (
    <Box height="100px" display="grid" border="1px" borderColor="#8080805e">
      <Flex justifyContent="space-between" alignItems="center" padding="0px 150px">
        <Heading>Header</Heading>
        <NextLink href="/cart" passHref> 
          <Link style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              icon={<FaCartArrowDown />}
              aria-label='Shopping Cart'
              bg="none" />
            <Text marginLeft="2" fontSize="lg">{products.length}</Text> 
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
}
