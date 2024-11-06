import { fetchVans } from '../utils/fetchVans';

export function vansLoader() {
  const vans = fetchVans("/api/vans");
  return vans;
}
