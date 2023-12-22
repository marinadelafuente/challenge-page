"use client";

// Providers
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

export const UsernameContext = createContext<{ savedUsername: string | null | undefined; setSavedUsername: Dispatch<SetStateAction<string | null | undefined>> }>({
  savedUsername: null,
  setSavedUsername: () => {},
});

export const JobTitleContext = createContext<{ savedJobTitle: string | null | undefined; setSavedJobTitle: Dispatch<SetStateAction<string | null | undefined>> }>({
  savedJobTitle: null,
  setSavedJobTitle: () => {},
});

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [savedUsername, setSavedUsername] = useState<string | null | undefined>("");
  const [savedJobTitle, setSavedJobTitle] = useState<string | null | undefined>("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let username = localStorage.getItem("savedUsername");
      setSavedUsername(username);

      let jobTitle = localStorage.getItem("savedJobTitle");
      setSavedJobTitle(jobTitle);
    }
  }, [savedUsername, savedJobTitle]);

  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <UsernameContext.Provider value={{ savedUsername, setSavedUsername }}>
          <JobTitleContext.Provider value={{ savedJobTitle, setSavedJobTitle }}>{children}</JobTitleContext.Provider>
        </UsernameContext.Provider>
      </ApolloProvider>
    </ChakraProvider>
  );
}
