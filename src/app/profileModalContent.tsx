"use client";
import { useRouter } from "next/navigation";
import { Button, FormControl, FormLabel, Input, ModalBody, ModalFooter, Text } from "@chakra-ui/react";
import { useState } from "react";
import { User } from "@/types";

// Components
import GenericModal from "./modal";

export default function ProfileModal({ savedUser }: { savedUser?: User }) {
  const [username, setUsername] = useState<string>(savedUser?.savedUsername ?? "");
  const [jobTitle, setJobTitle] = useState<string>(savedUser?.savedJobTitle ?? "");
  const [savedUsername, setSavedUserName] = useState<string | null | undefined>(savedUser?.savedUsername);
  const [updated, setUpdated] = useState<boolean>(false);
  const savedJobTitle = savedUser?.savedJobTitle;
  const saveItems = () => {
    if (!savedUser) {
      localStorage.setItem("savedUsername", username);
      setSavedUserName(username);
    } else {
      localStorage.setItem("savedUsername", username);
      localStorage.setItem("savedJobTitle", jobTitle);
      setUpdated(true);
      setTimeout(() => {
        setUpdated(false);
      }, 4200);
    }
  };
  const { push } = useRouter();
  const onClose = () => {
    push("/");
  };

  return (
    <>
      <GenericModal isShown={true} urlOnClose={"/"} title={savedJobTitle ? "Profile Details" : "Log In"}>
        <ModalBody>
          <form onSubmit={() => event?.preventDefault()}>
            {(savedJobTitle || !savedUsername) && (
              <FormControl isInvalid={!username && !savedUsername} mb="6">
                <FormLabel>Username</FormLabel>
                <Input id="username" type="text" placeholder="Enter your username" value={username} onChange={(event) => setUsername(event?.target.value)} />
                {/* {!value && <FormErrorMessage>{name} is required.</FormErrorMessage>} */}
              </FormControl>
            )}
            {savedUsername && (
              <FormControl isInvalid={!jobTitle && !savedJobTitle}>
                <FormLabel>Job Titlte</FormLabel>
                <Input id="jobTitle" type="text" placeholder="Enter your job title" value={jobTitle} onChange={(event) => setJobTitle(event?.target.value)} />
                {/* {!value && <FormErrorMessage>{name} is required.</FormErrorMessage>} */}
              </FormControl>
            )}
          </form>
          <Text pt="4" fontSize="sm" color="green">
            {updated ? "Details have been updated" : ""}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button type="button" variant="ghost" mr={3} onClick={onClose}>
            {savedUser || !jobTitle ? "Cancel" : "Back"}
          </Button>

          {!savedUser && savedUsername ? (
            <Button
              isDisabled={!savedUser && !jobTitle}
              type="submit"
              colorScheme="blue"
              onClick={() => {
                localStorage.setItem("savedJobTitle", jobTitle);
                onClose();
              }}
            >
              Log In
            </Button>
          ) : (
            <Button isDisabled={!savedUser && !username} isLoading={false} type="submit" colorScheme="blue" onClick={saveItems}>
              {savedUser ? "Update details" : "Continue"}
            </Button>
          )}
        </ModalFooter>
      </GenericModal>
    </>
  );
}
