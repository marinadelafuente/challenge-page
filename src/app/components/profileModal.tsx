"use client";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useState } from "react";
import { useContext } from "react";

// Components
import { Button, FormControl, FormLabel, Input, ModalBody, ModalFooter, Text } from "@chakra-ui/react";
import GenericModal from "./modal";

// types
import type { OnCloseProps } from "@/types";

// Providers
import { UsernameContext, JobTitleContext } from "../providers";

export default function ProfileModal({ onCloseModal }: OnCloseProps) {
  const { push } = useRouter();
  // Get username and job title from context
  let { savedUsername, setSavedUsername } = useContext(UsernameContext);
  let { savedJobTitle, setSavedJobTitle } = useContext(JobTitleContext);

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
      if (savedJobTitle !== jobTitle) {
        setSavedJobTitle(jobTitle);
        localStorage.setItem("savedJobTitle", jobTitle);
      }
      if ((event?.target as Element)?.id === "login-button") {
        onClose();
        push("/locations");
      }
      setUpdated(true);
      setTimeout(() => {
        setUpdated(false);
      }, 4200);
    }
  };

  const closeUrl = savedJobTitle ? "/locations" : undefined;

  // Close modal
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
                <Input autoFocus id="username" type="text" placeholder="Enter your username" value={username ?? savedUsername} onChange={(event) => setUsername(event?.target.value)} />
              </FormControl>
            )}
            {savedUsername && !showUserNameAgain && (
              <FormControl isInvalid={!jobTitle && !savedJobTitle}>
                <FormLabel>Job Titlte</FormLabel>
                <Input autoFocus id="jobTitle" type="text" placeholder="Enter your job title" value={jobTitle ?? savedJobTitle} onChange={(event) => setJobTitle(event?.target.value)} />
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
            <Button id="login-button" isDisabled={!savedJobTitle && !jobTitle} type="submit" className="main-button" onClick={saveItems}>
              Log In
            </Button>
          ) : (
            <Button isDisabled={!savedUsername && !username} isLoading={false} type="submit" className="main-button" onClick={saveItems}>
              {savedUsername ? "Update details" : "Continue"}
            </Button>
          )}
        </ModalFooter>
      </GenericModal>
    </>
  );
}
