import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/licencias-turisticas/orihuela',
      permanent: false,
    },
  };
};

export default function OldOwnersPage() {
  return <></>;
}
