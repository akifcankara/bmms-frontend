import { create } from 'zustand'

type Store = {
  title: string
  subtitle: string
  buttonText: string

  setContent: (title: string, subtitle: string, buttonText: string) => void
}

export const useBreadcrumb = create<Store>()((set) => ({
    title: 'Operations Dashboard',
    subtitle: 'Manage clients, cases, and business operations',
    buttonText: 'New Client',
    setContent: (title: string, subtitle: string, buttonText) => set({ title, subtitle, buttonText }),
}))
