"use client";

import { Suspense } from "react";
import { inter, roboto_mono, open_sans } from "./fonts";
import { Providers } from "./providers";

// CSS
import "./assets/css/globals.css";

// Components
import { Container, Box } from "@chakra-ui/react";
import Nav from "./components/nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
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
