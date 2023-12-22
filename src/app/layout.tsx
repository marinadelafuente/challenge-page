import { Suspense } from "react";
import type { Metadata } from "next";

// Styles
import "./assets/css/globals.css";
import { inter } from "./fonts";

// Components
import Nav from "./components/nav";

// Providers
import { Providers } from "./providers";
import MainContainer from "./components/mainContainer";

export const metadata: Metadata = {
  title: "Rick & Morty fan page",
  description: "Find out all about the Rick and Morty locations",
};

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
            <MainContainer {...{ children }} />
          </main>
        </Providers>
      </body>
    </html>
  );
}
