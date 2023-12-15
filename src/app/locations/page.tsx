"use client";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useContext } from "react";

// Components
import Link from "next/link";
import { Box, Button, Card, CardHeader, CardBody, Heading, Grid, GridItem, Text } from "@chakra-ui/react";

// Types
import type { Locations } from "@/types";

// Providers
import { UsernameContext } from "../providers";

const GET_LOCATIONS = gql`
  query {
    locations {
      results {
        id
        name
      }
    }
  }
`;

export default function InformationPage() {
  const router = useRouter();
  // Get username from context
  let { savedUsername } = useContext(UsernameContext);
  // Get request data
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) {
    return (
      <Box textAlign={"center"}>
        <span className="loader"></span>
      </Box>
    );
  }

  if (error) return <p>Error: {error.message}</p>;

  // Return to homepage if there is no username
  if (!savedUsername) {
    router.replace("/");
  }

  const locations: Locations = data.locations.results;

  return (
    <>
      <Heading textAlign="center" as="h1" size="2xl" mb="10" color="white">
        Locations
      </Heading>
      <Grid gap={6} templateColumns={`repeat(auto-fill, minmax(15rem, 1fr))`} justifyItems="center" gridAutoRows="1fr" margin={0} padding={0}>
        {locations.map((location) => (
          <GridItem key={location.id} w="100%" h="100%">
            <Link href={`/locations/${location.id}`}>
              <Card>
                <CardHeader>
                  <Heading textAlign="center" size="md">
                    {location.name}
                  </Heading>
                </CardHeader>
                <CardBody textAlign="center">
                  <Button className="main-button">View more</Button>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
