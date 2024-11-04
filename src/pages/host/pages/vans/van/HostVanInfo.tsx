import { useOutletContext } from "react-router-dom";
import { Van } from "../../../../../types/vans";

interface DetailsProps {
  id: number;
  title: string;
  data: string;
}

const HostVanInfo = () => {

  const { van } = useOutletContext<{van: Van}>()

  const details: DetailsProps[] = [
    { id: 1, title: 'Name', data: van.name },
    { id: 2, title: 'Category', data: van.type },
    { id: 3, title: 'Description', data: van.description },
    { id: 4, title: 'Visibility', data: 'Public' },
  ]

  return ( 
    <div className="flex flex-col gap-4 text-sm">
      {details.map((detail) => (
        <div
          key={detail.id}
        >
          <span className="font-inter-bold">{detail.title}: </span>
          <span>{detail.data}</span>
        </div>
      ))}
    </div>
   );
}
 
export default HostVanInfo;