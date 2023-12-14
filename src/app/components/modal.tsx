"use client";
import { useRouter } from "next/navigation";

// Components
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from "@chakra-ui/react";

// Types
import { ModalType } from "@/types";

export default function GenericModal({ isShown, title, children, urlOnClose, onCloseModal }: ModalType) {
  const { push } = useRouter();
  const onClose = () => {
    onCloseModal ? onCloseModal() : push(`${urlOnClose}`);
  };

  return (
    <Modal isOpen={isShown} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={4} pt={3}>
        <ModalHeader mb="3" textAlign={"center"} borderBottom={"3px solid rgb(var(--main-color-darker))"}>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        {children}
      </ModalContent>
    </Modal>
  );
}
