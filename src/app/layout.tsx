"use client";
import { Suspense } from "react";

// Styles
import "./assets/css/globals.css";
import { inter } from "./fonts";

// Components
import { Container, Box } from "@chakra-ui/react";
import Nav from "./components/nav";

// Providers
import { Providers } from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header style={{ padding: "20px 40px", background: "#edfafe", borderBottom: "4px solid rgb(var(--main-color))" }}>
            <Suspense>
              <Nav />
            </Suspense>
          </header>
          <main>
            <Container maxW="container.lg" h="100%" bg="rgb(var(--main-color))">
              <Box w="100%" h="100%" py="10">
                {children}
              </Box>
            </Container>
          </main>
        </Providers>
      </body>
    </html>
  );
}
