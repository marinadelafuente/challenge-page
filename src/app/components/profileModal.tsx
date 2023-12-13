"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useContext } from "react";

// Components
import { Button, FormControl, FormLabel, Input, ModalBody, ModalFooter, Text } from "@chakra-ui/react";
import GenericModal from "./modal";

// types
import type { OnCloseProps } from "@/types";

// Providers
import { UsernameContext, JobTitleContext } from "../providers";

export default function ProfileModal({ onCloseModal }: OnCloseProps) {
  let { savedUsername, setSavedUsername } = useContext(UsernameContext);
  let { savedJobTitle, setSavedJobTitle } = useContext(JobTitleContext);
  const { push } = useRouter();

  let [username, setUsername] = useState<string>(savedUsername ?? "");
  let [jobTitle, setJobTitle] = useState<string>(savedJobTitle ?? "");

  // Update message when user info has been updated
  const [updated, setUpdated] = useState<boolean>(false);

  // Allow going back to username page
  const [showUserNameAgain, setShowUserNameAgain] = useState<boolean>(false);

  const saveItems = () => {
    if (!savedUsername) {
      // Save username
      setSavedUsername(username);
      localStorage.setItem("savedUsername", username);
    } else {
      // Update user details
      if (savedUsername !== username) {
        setSavedUsername(username);
        localStorage.setItem("savedUsername", username);
      }
      setSavedJobTitle(jobTitle);
      localStorage.setItem("savedJobTitle", jobTitle);
      setUpdated(true);
      setTimeout(() => {
        setUpdated(false);
      }, 4200);
    }
  };

  const closeUrl = savedJobTitle ? "/information-page" : undefined;

  const onClose = () => {
    onCloseModal ? onCloseModal() : push(`${closeUrl}`);
  };

  return (
    <>
      <GenericModal isShown={true} urlOnClose={closeUrl} onCloseModal={onCloseModal} title={savedJobTitle ? "Profile Details" : "Log In"}>
        <ModalBody>
          <form onSubmit={() => event?.preventDefault()}>
            {(savedJobTitle || !savedUsername || showUserNameAgain) && (
              <FormControl isInvalid={!username && !savedUsername} mb={savedUsername ? "6" : "0"}>
                <FormLabel>Username</FormLabel>
                <Input id="username" type="text" placeholder="Enter your username" value={username ?? savedUsername} onChange={(event) => setUsername(event?.target.value)} />
                {/* {!value && <FormErrorMessage>{name} is required.</FormErrorMessage>} */}
              </FormControl>
            )}
            {savedUsername && !showUserNameAgain && (
              <FormControl isInvalid={!jobTitle && !savedJobTitle}>
                <FormLabel>Job Titlte</FormLabel>
                <Input id="jobTitle" type="text" placeholder="Enter your job title" value={jobTitle} onChange={(event) => setJobTitle(event?.target.value)} />
                {/* {!value && <FormErrorMessage>{name} is required.</FormErrorMessage>} */}
              </FormControl>
            )}
          </form>
          <Text pt="4" fontSize="sm">
            {updated ? "Details have been updated" : ""}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            type="button"
            variant="ghost"
            mr={3}
            onClick={
              savedUsername && !jobTitle
                ? (ev) => {
                    setShowUserNameAgain(true);
                    ev.preventDefault();
                  }
                : () => onClose()
            }
          >
            {savedUsername && !jobTitle ? "Back" : "Cancel"}
          </Button>
          {!savedJobTitle && savedUsername ? (
            <Button
              isDisabled={!savedJobTitle && !jobTitle}
              type="submit"
              background="rgb(var(--main-color))"
              onClick={() => {
                localStorage.setItem("savedJobTitle", jobTitle);
                onClose();
                push("/information-page");
              }}
            >
              Log In
            </Button>
          ) : (
            <Button isDisabled={!savedUsername && !username} isLoading={false} type="submit" color="white" background="rgb(var(--main-color))" onClick={saveItems}>
              {savedUsername ? "Update details" : "Continue"}
            </Button>
          )}
        </ModalFooter>
      </GenericModal>
    </>
  );
}
