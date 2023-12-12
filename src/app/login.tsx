"use client";
import { usePathname } from "next/navigation";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, FormErrorMessage, useDisclosure, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FormInput } from "./formInput";
import Link from "next/link";

export default function LogInPage({ isShown }: { isShown: boolean }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [username, setUsername] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const savedUsername = localStorage.getItem("username");
  const pathname = usePathname();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.id === "username") {
      // localStorage.setItem("username", event.target.value);
      setUsername(event.target.value);
    } else {
      // localStorage.setItem("jobTitle", event.target.value);
      setJobTitle(event.target.value);
    }

    // event.currentTarget && localStorage.setItem('username', event.target.value);
    // localStorage.setItem('userId', '12345');setInput(event.target.value);
  };
  const saveItems = () => {
    username && localStorage.setItem("username", username);
    jobTitle && localStorage.setItem("jobTitle", jobTitle);
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isShown} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              {!savedUsername && <FormInput name={"username"} {...{ handleInputChange }} value={username} />}
              {savedUsername && <FormInput name={"job title"} {...{ handleInputChange }} value={jobTitle} />}
              {/* <FormControl isInvalid={!username}>
                <FormLabel>Username</FormLabel>
                <Input id="username" type="text" placeholder="Enter your username" value={input} onChange={handleInputChange} />
                {!username && <FormErrorMessage>Username is required.</FormErrorMessage>}
              </FormControl>
              <FormControl isInvalid={!username}>
                <FormLabel>Username</FormLabel>
                <Input id="username" type="text" placeholder="Enter your username" value={input} onChange={handleInputChange} />
                {!username && <FormErrorMessage>Username is required.</FormErrorMessage>}
              </FormControl> */}
            </form>
          </ModalBody>

          <ModalFooter>
            {/* <Button type="button" variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button> */}
            <Button type="button" variant="ghost" mr={3} onClick={onClose}>
              Back
            </Button>
            {/* <Button type="button" variant="ghost" onClick={saveItems} disabled={!username}>
              Continue
            </Button> */}
            {/* <Link href="/login-job">
              <a>Cart</a>
            </Link> */}
            <Button type="submit" colorScheme="blue" onClick={saveItems}>
              {savedUsername ? "Log In" : "Continue"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
