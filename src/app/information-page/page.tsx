"use client";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardBody, Heading, Grid, GridItem, Text } from "@chakra-ui/react";

// Types
import { Locations } from "@/types";

const GET_LOCATIONS = gql`
  query {
    locations {
      results {
        id
        name
        type
      }
    }
  }
`;

export default function InformationPage() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const locations: Locations = data.locations.results;

  return (
    <Grid gap={6} templateColumns={`repeat(auto-fill, minmax(15rem, 1fr))`} justifyItems="center" gridAutoRows="1fr" margin={0} padding={0}>
      {locations.map((location) => (
        <GridItem key={location.id} w="100%" h="100%">
          <Link href={`/information-page/${location.id}`}>
            <Card>
              <CardHeader>
                <Heading size="md">{location.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{location.type}</Text>
                <Text>View more</Text>
              </CardBody>
            </Card>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
}
