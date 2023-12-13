import { PropsWithChildren } from "react";

export type User = {
  savedUsername?: string | null;
  savedJobTitle?: string | null;
};

type Resident = {
  name: string;
  id: string;
  species: string;
};

export type Location = { id: string; name: string; type: string; dimension: string; residents: Resident[] };

export type Locations = Location[];

export type OnCloseProps = {
  onCloseModal: () => void;
};

export type ModalType = {
  isShown: boolean;
  title: string;
  urlOnClose?: string;
  onCloseModal?: () => void;
} & PropsWithChildren;
