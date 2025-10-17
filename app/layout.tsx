import './globals.css';
import { ReactNode } from 'react';
import Header from '@/app/components/header'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vincent Ong Personal Profile',
  description: 'Personal profile page of Vincent Ong',
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}