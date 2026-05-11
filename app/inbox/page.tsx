// export default async function Page() {
//   return <div>Messages page...</div>;
// }

import Checkbox from '@/components/ui/checkbox';

export default async function Page() {
  return (
    <Checkbox targetId="check1" label="Messages page..." variant="color" />
  );
}
