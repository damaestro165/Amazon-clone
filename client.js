import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'tk2dgnut',
  dataset: 'production',
  apiVersion: '2023-04-04',
  useCdn: false,
});
