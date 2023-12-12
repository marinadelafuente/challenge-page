"use client";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from "@chakra-ui/react";

type ModalType = {
  isShown: boolean;
  title: string;
  urlOnClose: string;
} & PropsWithChildren;

export default function GenericModal({ isShown, title, children, urlOnClose }: ModalType) {
  const { push } = useRouter();
  const onClose = () => {
    push(`${urlOnClose}`);
  };

  return (
    <Modal isOpen={isShown} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt="28">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        {children}
      </ModalContent>
    </Modal>
  );
}
