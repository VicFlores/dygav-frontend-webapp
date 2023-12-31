import { Footer, CityLicense } from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const CityLicensePage = () => {
  const { data: session } = useSession();
  const { query } = useRouter();

  return (
    <section>
      {query !== undefined && query.cities !== undefined && (
        <CityLicense session={session} cityName={query.cities as string} />
      )}

      <Footer />
    </section>
  );
};

export default CityLicensePage;
