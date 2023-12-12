"use client";
import { redirect } from "next/navigation";

import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

type Locations = [{ id: string; name: string; description: string; photo: string }];

export const CardList = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  if (!isLoggedIn) {
    redirect("/login");
  }
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  // loading as boolean
  if (loading) return <p>Loading...</p>;
  // if have error that 'll get populated as message
  if (error) return <p>Error: {error.message}</p>;
  const locations: Locations = data.locations;
  return locations.map(({ id, name, description, photo }) => (
    // <Link href={}></Link>
    <div key={id}>
      <h3>{name}</h3>
      {/* <Image width="400" height="250" alt="location-reference" src={`${photo}`} /> */}
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
};
