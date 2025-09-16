import Error404 from '@/components/fallback/Error404';
import { headers } from 'next/headers';

export default async function NotFound() {
  //   const headersList = headers();
  //   const domain = headersList.get('host');
  //   console.log(domain);

  return (
    <div>
      <Error404 />
    </div>
  );
}
