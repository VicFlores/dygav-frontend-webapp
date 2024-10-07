import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export type Props = {
  accessToken: RequestCookie | undefined;
};
