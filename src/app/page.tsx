"use client";
import { useContext, useState } from "react";

// Components
import { Box, Button, Heading } from "@chakra-ui/react";
import Link from "next/link";
import ProfileModal from "./components/profileModal";

// Providers
import { UsernameContext, JobTitleContext } from "./providers";

export default function Page() {
  // Get username and job title from context
  let { savedUsername } = useContext(UsernameContext);
  let { savedJobTitle } = useContext(JobTitleContext);

  const [isClosed, setIsClosed] = useState<boolean>(!!savedUsername);

  const closeModal = () => {
    setIsClosed(true);
  };

  // Redirect to information page if there are login details

  return (
    <>
      <Box textAlign="center" color="white" py={10}>
        <Heading as="h1" size="2xl" mb={20}>
          Welcome to the fan page dedicated to Rick and Morty!!
        </Heading>
        {savedUsername ? (
          <Link className="link-button" href="/locations">
            Go to Location Details
          </Link>
        ) : (
          <>
            <Heading as="h2" size="md" mb={8}>
              Login to access all the details about your favourite show!
            </Heading>
            <Button onClick={() => setIsClosed(false)}>Log In</Button>
          </>
        )}
      </Box>
      {!isClosed && <ProfileModal onCloseModal={closeModal} />}
    </>
  );
}
