"use client";

import { FormControl, FormLabel, FormErrorMessage, Input } from "@chakra-ui/react";
import { text } from "stream/consumers";

export const FormInput = ({ name, handleInputChange, value }: { name: string; handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; value?: string }) => {
  return (
    <FormControl isInvalid={!value}>
      <FormLabel style={{ textTransform: "capitalize" }}>{name}</FormLabel>
      <Input id={name} type="text" placeholder="Enter your username" value={value} onChange={handleInputChange} />
      {!value && <FormErrorMessage>{name} is required.</FormErrorMessage>}
    </FormControl>
  );
};
