import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Pronoun {
  HE = "HE",
  SHE = "SHE",
  THEY = "THEY"
}

export enum Currency {
  SGD = "SGD"
}

export declare class Collaborator {
  readonly name?: string;
  readonly function?: string;
  constructor(init: ModelInit<Collaborator>);
}

export declare class Customer {
  readonly id: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Customer>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}

export declare class Order {
  readonly id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

export declare class Artist {
  readonly id: string;
  readonly name: string;
  readonly pronouns: Pronoun | keyof typeof Pronoun;
  readonly description?: string;
  readonly email: string;
  readonly mobile: string;
  readonly bankAccount?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly songID?: string;
  constructor(init: ModelInit<Artist>);
  static copyOf(source: Artist, mutator: (draft: MutableModel<Artist>) => MutableModel<Artist> | void): Artist;
}

export declare class Album {
  readonly id: string;
  readonly title?: string;
  readonly tracks?: (Song | null)[];
  readonly description?: string;
  readonly price?: number;
  readonly cover?: string;
  readonly launchDateTime?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Album>);
  static copyOf(source: Album, mutator: (draft: MutableModel<Album>) => MutableModel<Album> | void): Album;
}

export declare class Song {
  readonly id: string;
  readonly title?: string;
  readonly price?: number;
  readonly artists?: (Artist | null)[];
  readonly collaborators?: (Collaborator | null)[];
  readonly lyrics?: string;
  readonly preview?: string;
  readonly file?: string;
  readonly albumID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Song>);
  static copyOf(source: Song, mutator: (draft: MutableModel<Song>) => MutableModel<Song> | void): Song;
}