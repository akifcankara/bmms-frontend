'use client';

import Image from 'next/image';
import { Menu, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import Avatar from './avatar';
import { useBreadcrumb } from '@/store/breadcrumb';
import Link from 'next/link';
import { useEffect } from 'react';

type HeaderProps = {
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
};

const MENU_BUTTON_LABELS = {
  OPEN: 'Open menu',
  CLOSE: 'Close menu',
};
const MENU_BUTTON_CLASS_NAME = 'md:hidden';
const HEADER_ACTIONS_CLASS_NAME =
  'hidden md:flex flex-wrap w-full items-center justify-between md:pl-[95px]';

export default function Header(props: HeaderProps) {
  const { title, subtitle, buttonText, href } = useBreadcrumb();

  const menuLabel = props.isSidebarOpen
    ? MENU_BUTTON_LABELS.CLOSE
    : MENU_BUTTON_LABELS.OPEN;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-5 bg-white p-5 px-10 border-b-1 border-gray-200">
      <Link href={'/'} className="cursor-pointer">
        <div className="flex items-center gap-3">
          <Button
            aria-label={menuLabel}
            type="button"
            size="icon"
            variant="ghost"
            className={MENU_BUTTON_CLASS_NAME}
            onClick={props.onMenuToggle}
          >
            <Menu />
          </Button>
          <Image src={'/logo.jpg'} alt="BMMS" width={125} height={42} />
        </div>
      </Link>
      <div className={HEADER_ACTIONS_CLASS_NAME}>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
        <div className="flex items-center gap-5">
          <Link href={href}>
            <Button
              className="text-white px-10 py-5 cursor-pointer"
              style={{
                background:
                  'linear-gradient(90deg, #00A0D2 10.38%, #05DC82 100%)',
              }}
            >
              <Plus className="w-4 h-4" /> {buttonText}
            </Button>
          </Link>
          <Avatar />
        </div>
      </div>
    </header>
  );
}
