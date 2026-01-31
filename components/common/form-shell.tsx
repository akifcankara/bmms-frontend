'use client';

import Image from 'next/image';
import Link from 'next/link';

type AppShellProps = {
  children: React.ReactNode;
};

export default function FormShell(props: AppShellProps) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 flex items-center justify-between gap-5 bg-white p-5 px-10 border-b-1 border-gray-200">
        <Link href={'/'}>
          <div className="flex items-center w-full flex-wrap gap-5">
            <Image src={'/logo.jpg'} alt="BMMS" width={125} height={42} />
            <h1 className="text-2xl font-bold mx-auto">{'KYC PRO Form'}</h1>
          </div>
        </Link>
      </header>
      <div className="flex">
        <main className="flex flex-col flex-1 min-w-0 gap-5">
          {props.children}
        </main>
      </div>
    </div>
  );
}
