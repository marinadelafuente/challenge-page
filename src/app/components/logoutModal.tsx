"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";

// Components
import { Button, ModalBody } from "@chakra-ui/react";
import GenericModal from "./modal";

// Types
import type { OnCloseProps } from "@/types";

// Providers
import { UsernameContext, JobTitleContext } from "../providers";

export default function LogoutModal({ onCloseModal }: OnCloseProps) {
  let { setSavedUsername } = useContext(UsernameContext);
  let { setSavedJobTitle } = useContext(JobTitleContext);

  const logout = () => {
    localStorage.removeItem("savedUsername");
    localStorage.removeItem("savedJobTitle");
    setSavedUsername(null);
    setSavedJobTitle(null);
    onCloseModal();
  };
  return (
    <GenericModal isShown={true} title="Are you sure you want to log out?" onCloseModal={onCloseModal}>
      <ModalBody p={6}>
        <Button variant="outline" w="100%" mb={4} borderColor="rgb(var(--main-color))" onClick={() => onCloseModal()}>
          Cancel
        </Button>
        <Button w="100%" background="rgb(var(--main-color))" color="white" onClick={() => logout()}>
          Log Out
        </Button>
      </ModalBody>
    </GenericModal>
  );
}
