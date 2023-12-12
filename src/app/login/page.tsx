"use client";
import { usePathname } from "next/navigation";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, FormErrorMessage, useDisclosure, Input } from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
import { FormInput } from "../formInput";
import ProfileModal from "../profileModalContent";

export default function LogInPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const savedUsername = localStorage.getItem("savedUsername");

  return <ProfileModal />;
}
