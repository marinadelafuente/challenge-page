"use client";

// Components
import { Container, Box } from "@chakra-ui/react";

export default function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <Container maxW="container.lg" h="100%" bg="rgb(var(--main-color))">
      <Box w="100%" h="100%" py="10">
        {children}
      </Box>
    </Container>
  );
}
