import React, { useEffect } from "react";
import {
  Container,
  VStack,
  Text,
  SimpleGrid,
  Box,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";


const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts(); // Make sure this function exists in your store
  }, [fetchProducts]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={30}
          fontWeight="bold"
          bgGradient={"linear(to-r, cyan.500, blue.500)"}
          bgClip={"text"}
          textAlign="center"
        >
          Current Products
        </Text>

        {products.length > 0 ? (
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={10}
            w="full"
          >
            {products.map((product) => (
              
              <ProductCard key={product._id} product={product}/>
              
               
            ))}

          </SimpleGrid>
        ) : (
          <Text
            fontSize={20}
            fontWeight="bold"
            color="gray.600"
            textAlign="center"
          >
            No products found.{" "}
            <Link to="/create">
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
