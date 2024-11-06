import { fetchVans } from '../utils/fetchVans';

export function loader() {
  const vans = fetchVans("/api/vans");
  return vans;
}
