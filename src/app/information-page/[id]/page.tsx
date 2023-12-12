"use client";
import { redirect } from "next/navigation";

import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { Location } from "@/types";
import GenericModal from "@/app/modal";
import { Button, FormControl, FormLabel, Input, ModalBody, ModalFooter, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const GET_LOCATION = gql`
    query {
      location(id: ${params.slug}) {
        name
        type
        dimension
        residents {
          name
          id
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_LOCATION);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const location: Location = data.location;
  return (
    <GenericModal isShown={true} title={location.name} urlOnClose={"/information-page"}>
      <ModalBody>
        <Text>{location.type}</Text>
        <Text>{location.dimension}</Text>
        {location.residents.map((resident) => (
          <Text key={resident.id}>{resident.name}</Text>
        ))}
      </ModalBody>
    </GenericModal>
  );
}
