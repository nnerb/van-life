import { fetchVans } from '../utils/fetchVans';

export function hostVansLoader() {
  const hostVans = fetchVans('/api/host/vans');
  return hostVans
}
