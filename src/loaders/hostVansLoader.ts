import { fetchVans } from '../utils/fetchVans';

export function hostVansLoader() {
  const vans = fetchVans("/api/host/vans");
  return vans;
}
