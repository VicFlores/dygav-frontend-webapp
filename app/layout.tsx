import type { Metadata } from 'next';
import '../styles/globals.css';
import { LocaleProvider } from './context/LocaleContext';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LocaleProvider>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </LocaleProvider>
  );
}
