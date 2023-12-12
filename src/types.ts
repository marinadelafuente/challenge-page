export type User = {
  savedUsername: string | null;
  savedJobTitle: string | null;
};

type Resident = {
  name: string;
  id: string;
};

export type Location = { id: string; name: string; type: string; dimension: string; residents: Resident[] };

export type Locations = Location[];
