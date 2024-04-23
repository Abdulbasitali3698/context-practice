import { Box } from "@chakra-ui/react";

export default function ParallelLayout({
    children,
    products,
    carts,
}:{
    children: React.ReactNode;
    products: React.ReactNode;
    carts:React.ReactNode;
}){
    return(
        <>
        <Box>{children}</Box>
        <Box>{products}</Box>
        <Box>{carts}</Box>
        </>
    )
}