import type { AppProps } from 'next/app';
import { UIProvider } from '@/context';
import { Poppins } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css';
import { LocaleProvider } from '@/app/context/LocaleContext';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <SessionProvider>
        <UIProvider>
          <main className={poppins.className}>
            <Component {...pageProps} />
          </main>
        </UIProvider>
      </SessionProvider>
    </LocaleProvider>
  );
}
