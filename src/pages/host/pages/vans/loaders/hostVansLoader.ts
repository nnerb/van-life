// loaders/hostVansLoader.ts

// import { json } from 'react-router-dom';
import { fetchVans } from '../../../../../utils/fetchVans';

export async function loader() {

  const vans = await fetchVans();
  return vans || []; // Fallback to an empty array if `vans` is undefined
 
}
