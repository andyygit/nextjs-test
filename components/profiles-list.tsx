import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Medal } from 'lucide-react';
// import { getNewestProfiles } from '@/data-access/tblProfiles';

export default async function ProfilesList() {
  // const profiles = await getNewestProfiles();
  // to be deleted
  // await new Promise((resolve) => setTimeout(resolve, 1000)); //simulate delay
  const profiles = [
    {
      id: 1,
      imgpath: 'https://placehold.co/960x540/90a1b9/FFF',
      fullname: 'Florin Piersic',
      location: 'Constanta',
      ispremium: true,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sequi.',
    },
    {
      id: 2,
      imgpath: 'https://placehold.co/960x540/90a1b9/FFF',
      fullname: 'Draga Olteanu',
      location: 'Bucuresti',
      ispremium: false,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure exercitationem mollitia quisquam minus delectus.',
    },
    {
      id: 3,
      imgpath: 'https://placehold.co/960x540/90a1b9/FFF',
      fullname: 'Colea Rautu',
      location: 'Cluj Napoca',
      ispremium: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, soluta labore dicta accusantium, laboriosam at, libero facere est atque dolores recusandae? At eius omnis possimus pariatur commodi aut velit veritatis?',
    },
    {
      id: 4,
      imgpath: 'https://placehold.co/960x540/90a1b9/FFF',
      fullname: 'Elena Cucu',
      location: 'Constanta',
      ispremium: true,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis placeat quo et.',
    },
  ];
  // ---------------
  if (profiles instanceof Error) {
    return <div>Ceva nu a mers bine...</div>;
  } else {
    return (
      <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* {profiles.map(user => <div key={user.id}>{user.joinDate?.toLocaleString()}</div>)} */}
        {profiles.map((user) => (
          <Link key={user.id} href={{ pathname: `/profiles/${user.id}` }}>
            <div className="sm:rounded-lg sm:overflow-hidden shadow-md">
              <Image
                unoptimized={true}
                width={960}
                height={540}
                src={user.imgpath}
                alt={user.fullname}
                className="clip-image"
              />
              <div className="p-2 sm:rounded-b-lg">
                <h3 className="font-semibold">{user.fullname}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="size-4" />
                  <p className="pl-1 grow">{user.location}</p>
                  {user.ispremium && (
                    <Medal className="size-4 text-orange-500" />
                  )}
                </div>
                <div className="flex py-4 gap-4">
                  <p className="text-sm max-h-16 overflow-hidden">
                    {user.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
