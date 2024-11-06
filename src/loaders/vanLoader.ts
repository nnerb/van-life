import { LoaderFunctionArgs } from 'react-router-dom';
import { fetchVans } from '../utils/fetchVans';
import { fetchVan } from '../utils/fetchVan';

// Correct way to access params in loader
export async function vanLoader({ params }: LoaderFunctionArgs) {
  const { id } = params;  
  const van = await fetchVan(`/api/vans/${id}`);
  const vans = await fetchVans('/api/vans');

  return { van, vans }; 
}
