"use client";
import { useContext, useState } from "react";

// Components
import Image from "next/image";
import Link from "next/link";
import { Heading, Button, Flex, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from "@chakra-ui/react";
import LogoutModal from "./logoutModal";
import ProfileModal from "./profileModal";

// Assets
import ProfileIcon from "../assets/icons/profileIcon";

// Providers
import { UsernameContext } from "../providers";

export default function Nav() {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false);
  // Get username from context
  let { savedUsername } = useContext(UsernameContext);
  return (
    <>
      <Flex justify="space-between" align="center" zIndex={5} position="relative">
        <Heading as="h1" fontSize="x-large" fontWeight="600" color="rgb(var(--main-color))">
          <Link href="/">
            <Image src="/logo.png" alt="Rick and Morty logo" width={200} height={57} priority />
          </Link>
        </Heading>
        {savedUsername ? (
          <Menu gutter={4}>
            <MenuButton as={IconButton} aria-label="Options" icon={<ProfileIcon />} _hover={{ bg: "transparent", transform: "scale(1.1)" }} _active={{ bg: "transparent" }}></MenuButton>
            <MenuList bg="rgb(var(--main-color-darker))" color="white" px="2" borderRadius="10" borderWidth={3}>
              <MenuItem bg="transparent" fontWeight={700} color="white" py="1" onClick={() => setIsProfileOpen(true)} _hover={{ bg: "rgb(var(--main-color))" }}>
                Profile
              </MenuItem>
              <MenuDivider />
              <MenuItem bg="transparent" fontWeight={700} color="white" py="1" onClick={() => setIsLogoutOpen(true)} _hover={{ bg: "rgb(var(--main-color))" }}>
                Log Out
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button className="main-button" onClick={() => setIsProfileOpen(true)} style={{ background: "rgb(var(--main-color-darker))", color: "white" }}>
            Log In
          </Button>
        )}
      </Flex>
      {isLogoutOpen && <LogoutModal onCloseModal={() => setIsLogoutOpen(false)} />}
      {isProfileOpen && <ProfileModal onCloseModal={() => setIsProfileOpen(false)} />}
    </>
  );
}
