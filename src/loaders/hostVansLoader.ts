import { fetchVans } from '../utils/fetchVans';

export function loader() {
  const vans = fetchVans("/api/host/vans");
  return vans;
}
