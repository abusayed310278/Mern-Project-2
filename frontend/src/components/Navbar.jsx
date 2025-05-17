import React from "react";
import {
  Text,
  Container,
  Flex,
  HStack,
  Button,
  useColorMode,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r,cyan.400,blue.500)"}
          bgClip={"text"}
        >
          <Link to="/">
            Product Store <Icon as={FiShoppingCart} ml={2} />
          </Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to="/create">
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>

          {/* Correct use of IconButton */}
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
