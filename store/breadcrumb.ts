import { create } from 'zustand';

type Store = {
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;

  setContent: (
    title: string,
    subtitle: string,
    buttonText: string,
    href: string
  ) => void;
};

export const useBreadcrumb = create<Store>()((set) => ({
  href: '',
  title: 'Operations Dashboard',
  subtitle: 'Manage clients, cases, and business operations',
  buttonText: 'New Client',
  setContent: (
    title: string,
    subtitle: string,
    buttonText: string,
    href: string
  ) => set({ title, subtitle, buttonText, href }),
}));
