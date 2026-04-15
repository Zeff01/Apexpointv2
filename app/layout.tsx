import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import BackgroundMusic from '@/components/sections/navbar/bgmusic';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apexpoint',
  description: 'Apexpoint',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundMusic /> {/* ✅ GLOBAL audio */}
        {children}
      </body>
    </html>
  );
}
