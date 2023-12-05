import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/gestion-viviendas-turisticas',
      permanent: false,
    },
  };
};

export default function OldOwnersPage() {
  return <></>;
}
