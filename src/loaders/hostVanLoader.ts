import { LoaderFunctionArgs } from 'react-router-dom';
import { fetchVan } from '../utils/fetchVan';
import { Van } from '../types/vans';

export async function hostVanLoader({ params }: LoaderFunctionArgs): Promise<Van> {
  const { id } = params;
  if (!id) {
    throw new Error('Van ID is required but not provided');
  }
  const hostVan = await fetchVan(`/api/host/vans/${id}`, id);
  return hostVan;
}
