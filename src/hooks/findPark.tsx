import { parks } from '../assets/content';

// export interface Park {
//   id: string;
//   name: string;
//   desc: string;
//   address: string;
// }

export function findPark(id: string) {
  let found = parks.find(e => e.id === id);
  return {
    found
  };
};