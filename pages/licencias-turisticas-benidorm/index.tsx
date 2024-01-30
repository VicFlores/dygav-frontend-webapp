import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/licencias-turisticas/benidorm',
      permanent: true,
    },
  };
};

export default function OldOwnersPage() {
  return <></>;
}
