"use client";
import { Suspense, useEffect, useState } from "react";
import { fonts } from "./fonts";
import { Providers } from "./providers";

// CSS
import "./globals.css";

// Components
import { Container, Box } from "@chakra-ui/react";
import Nav from "./nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const [savedUsername, setSavedUsername] = useState<string | null>(null);

  // const [savedJobTitle, setSavedJobTitle] = useState<string | null>(null);

  // useEffect(() => {
  //   if (typeof window !== "undefined" && window.localStorage) {
  //     let username = localStorage.getItem("savedUsername");
  //     setSavedUsername(username);

  //     let jobTitle = localStorage.getItem("savedJobTitle");
  //     setSavedJobTitle(jobTitle);
  //   }
  // }, []);
  const savedUsername = typeof window !== "undefined" ? window.localStorage.getItem("savedUsername") : null;
  const savedJobTitle = typeof window !== "undefined" ? window.localStorage.getItem("savedJobTitle") : null;
  const user = { ...{ savedUsername, savedJobTitle } };

  return (
    <html lang="en">
      <body className={fonts.rubik.variable}>
        <header style={{ padding: "20px 40px", background: "#edfafe", borderBottom: "4px solid #813981" }}>
          <Suspense>
            <Nav {...{ savedUsername, savedJobTitle }} />
          </Suspense>
        </header>
        <main>
          <Container w="100%" h="100%">
            <Box w="100%" h="100%" px="40" py="20">
              <Providers>{children}</Providers>
            </Box>
          </Container>
        </main>
      </body>
    </html>
  );
}
