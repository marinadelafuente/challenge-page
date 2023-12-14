"use client";
import { useContext, useState } from "react";
import { redirect } from "next/navigation";

// Components
import { Box, Button, Heading } from "@chakra-ui/react";
import ProfileModal from "./components/profileModal";

// Providers
import { UsernameContext, JobTitleContext } from "./providers";

export default function Page() {
  const [isClosed, setIsClosed] = useState<boolean>(false);

  const closeModal = () => {
    setIsClosed(true);
  };
  // Get username and job title from context
  let { savedUsername } = useContext(UsernameContext);
  let { savedJobTitle } = useContext(JobTitleContext);

  // Redirect to information page if there are login details
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
