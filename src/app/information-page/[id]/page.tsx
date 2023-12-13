"use client";
import { useQuery, gql } from "@apollo/client";

// Components
import GenericModal from "@/app/components/modal";
import { Box, Flex, Heading, List, ListItem, ModalBody, Text } from "@chakra-ui/react";

// Types
import { Location } from "@/types";

export default function Page({ params }: { params: { id: string } }) {
  const GET_LOCATION = gql`
    query {
      location(id: ${params.id}) {
        name
        type
        dimension
        residents {
          name
          id
          species
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_LOCATION);
  if (loading) {
    return (
      <Box textAlign={"center"}>
        <span className="loader"></span>
      </Box>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  const location: Location = data.location;
  return (
    <GenericModal isShown={true} title={location.name.toUpperCase()} urlOnClose={"/information-page"}>
      <ModalBody>
        <Flex alignItems="center" gap={3} mb="3">
          <Heading as="h2" size="md" color={"rgb(var(--main-color-darker))"}>
            Type:
          </Heading>
          <Text>{location.type}</Text>
        </Flex>
        <Flex alignItems="center" gap={3} mb="3">
          <Heading as="h3" size="md" color={"rgb(var(--main-color-darker))"}>
            Dimension:
          </Heading>
          <Text>{location.dimension}</Text>
        </Flex>
        <Flex direction="column" gap={2}>
          <Heading as="h4" size="md" color={"rgb(var(--main-color-darker))"}>
            Residents:
          </Heading>
          <List>
            {location.residents.map((resident) => (
              <ListItem key={resident.id} border={"1px solid rgb(var(--main-color))"} mb={2} borderRadius={5} p={4}>
                <Flex alignItems="center" gap={3} mb="1">
                  <Heading as="h5" size="sm">
                    Name:
                  </Heading>
                  <Text>{resident.name}</Text>
                </Flex>
                <Flex alignItems="center" gap={3} mb="1">
                  <Heading as="h6" size="sm">
                    Species:
                  </Heading>
                  <Text>{resident.species}</Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </Flex>
      </ModalBody>
    </GenericModal>
  );
}
