import Navbar from '@/components/admin/Layout/NavBar';
import '../globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PFE',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 bg-white">
      <Navbar />
      <main className="col-span-10">{children}</main>
    </div>
  );
}
