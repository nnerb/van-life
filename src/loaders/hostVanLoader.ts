import { LoaderFunctionArgs } from 'react-router-dom';
import { fetchVan } from '../utils/fetchVan';
import { Van } from '../types/vans';

// Correct way to access params in loader
export async function hostVanLoader({ params }: LoaderFunctionArgs): Promise<Van> {
  const { id } = params;  
  const van = await fetchVan(`/api/vans/${id}`);
  return van
}
