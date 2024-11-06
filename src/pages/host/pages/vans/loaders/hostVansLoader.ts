import { fetchVans } from '../../../../../utils/fetchVans';

export function loader() {
  return fetchVans()
}
