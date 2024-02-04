"use client"
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
// import '../globals.css'
import Sidebar from '../components/Sidebar';
type NavigationItem = {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  current: boolean;
};

type Team = {
  id: number;
  name: string;
  href: string;
  initial: string;
  current: boolean;
};

const navigation: NavigationItem[] = [
  { name: 'Статус', href: '/status', icon: HomeIcon, current: false },
  { name: 'Керування', href: '/manage', icon: UsersIcon, current: false },
  { name: 'Перевiрка IP', href: '/check', icon: FolderIcon, current: false },
];

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cmd, setCmd] = useState('');
    useEffect(() => {
      if (localStorage.getItem('cmd')) {
        setCmd(localStorage.getItem('cmd') || '');
      }
      console.log(localStorage.getItem('cmd'))
    })
  return (
    <>
        <Sidebar />
        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
</>
  );
}

