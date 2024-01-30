import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/licencias-turisticas/el-campello',
      permanent: true,
    },
  };
};

export default function OldOwnersPage() {
  return <></>;
}
