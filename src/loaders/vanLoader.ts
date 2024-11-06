import { LoaderFunctionArgs } from 'react-router-dom';
import { fetchVan } from '../utils/fetchVan';

export async function vanLoader({ params }: LoaderFunctionArgs) {
  const { id } = params;  
  if (!id) {
    throw new Error('Van ID is required but not provided');
  }
  const van = await fetchVan(`/api/vans/${id}`, id);
  return van
}
