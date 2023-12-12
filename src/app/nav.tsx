"use client";
import { Heading, Button, Flex, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from "@chakra-ui/react";
import { User } from "@/types";
import ProfileIcon from "../assets/icons/profileIcon";
import Image from "next/image";

export default function Nav({ ...user }: User) {
  return (
    <Flex justify="space-between" align="center">
      <Heading as="h1" fontSize="x-large" fontWeight="600" color="#813981">
        {/* <Image src="/rick_and_morty_ai.jpg" alt="Rick and Morty logo" width={180} height={37} priority /> */}
      </Heading>
      {user.savedUsername ? (
        <Menu gutter={4}>
          <MenuButton as={IconButton} aria-label="Options" icon={<ProfileIcon />}></MenuButton>
          <MenuList bg="#813981" color="white" px="25" borderRadius="10">
            <MenuItem py="10" as="a" href="/my-profile">
              Profile
            </MenuItem>
            <MenuDivider />
            <MenuItem py="10">Log Out</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button>Log In</Button>
      )}
    </Flex>

    // <div className="border-t border-gray-200 pt-4 pb-3">
    //   {user ? (
    //     <>
    //       <Menu>
    //         <MenuButton as={Button} rightIcon={<ProfileIcon />}></MenuButton>
    //         <MenuList>
    //           <MenuItem>Profile</MenuItem>
    //           <MenuItem>Log Out</MenuItem>
    //         </MenuList>
    //       </Menu>
    //       {/* <div className="flex items-center px-4">
    //         <div className="flex-shrink-0">
    //           <Image className="h-8 w-8 rounded-full" src={user.image} height={32} width={32} alt={`${user.name} avatar`} />
    //         </div>
    //         <div className="ml-3">
    //           <div className="text-base font-medium text-gray-800">{user.savedJobTitle}</div>
    //           <div className="text-sm font-medium text-gray-500">{user.savedJobTitle}</div>
    //         </div>
    //       </div>
    //       <div className="mt-3 space-y-1">
    //         <button onClick={() => ""} className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
    //           Log out
    //         </button>
    //       </div> */}
    //     </>
    //   ) : (
    //     <div className="mt-3 space-y-1">
    //       <button onClick={() => ""} className="flex w-full px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
    //         Log in
    //       </button>
    //     </div>
    //   )}
    // </div>
  );
  // return <Navbar user={session?.user} />;
}
