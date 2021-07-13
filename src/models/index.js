// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Pronoun = {
  "HE": "HE",
  "SHE": "SHE",
  "THEY": "THEY"
};

const Currency = {
  "SGD": "SGD"
};

const { Customer, Order, Artist, Album, Song, Collaborator } = initSchema(schema);

export {
  Customer,
  Order,
  Artist,
  Album,
  Song,
  Pronoun,
  Currency,
  Collaborator
};