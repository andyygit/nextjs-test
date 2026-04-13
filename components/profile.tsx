import { getUserByID } from '@/data-access/tblUsers';

export default async function Profile({ searchID }: { searchID: string }) {
  // const profile = await getUserByID(parseInt(searchID));
  // to be deleted
  // await new Promise((resolve) => setTimeout(resolve, 2000)); //simulate delay
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
  const profile = profiles.find((p) => p.id === parseInt(searchID, 10));
  // ---------------
  return profile ? (
    <>
      <div className="text-lg font-semibold p-4">
        This is the ID {profile.id} personal profile
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        molestias, incidunt at, eligendi blanditiis voluptate ipsum
        necessitatibus illo facilis natus nisi reprehenderit nostrum quo animi
        assumenda. Saepe laborum eos molestias asperiores. Consectetur, fuga
        aut. Consequatur doloremque at similique nemo sed, vel esse enim ab
        reprehenderit perferendis. Deserunt, labore?
      </div>
    </>
  ) : (
    <div>Profile not found!</div>
  );
}
