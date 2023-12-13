"use client";
import { useContext, useState, useEffect } from "react";
import { UsernameContext, JobTitleContext } from "./providers";
import { redirect, useRouter, usePathname, useSearchParams } from "next/navigation";

// Components
import { Box, Button, Heading } from "@chakra-ui/react";
import ProfileModal from "./components/profileModal";

export default function Page() {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const router = useRouter();
  // router.refresh();
  const closeModal = () => {
    setIsClosed(true);
  };

  let { savedUsername } = useContext(UsernameContext);
  let { savedJobTitle } = useContext(JobTitleContext);

  if (savedUsername && savedJobTitle) {
    return redirect("/information-page");
  }

  return (
    <>
      <Box textAlign="center" color="white" py={10}>
        <Heading as="h1" size="2xl" mb={20}>
          Welcome to the fan page dedicated to Rick and Morty!!
        </Heading>
        <Heading as="h2" size="md" mb={8}>
          Login to access all the details about your favourite show!
        </Heading>
        <Button className="linkButton" onClick={() => setIsClosed(false)}>
          Log In
        </Button>
      </Box>
      {!isClosed && <ProfileModal onCloseModal={closeModal} />}
    </>
  );
}
