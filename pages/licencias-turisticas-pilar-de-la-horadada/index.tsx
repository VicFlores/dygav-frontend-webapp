import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/licencias-turisticas/pilar-de-la-horadada',
      permanent: false,
    },
  };
};

export default function OldOwnersPage() {
  return <></>;
}
