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
    LinkIcon,
    Cog6ToothIcon,
    RssIcon,
    GlobeAltIcon,
    ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import '../globals.css'
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
    { name: 'Статус', href: '/dashboard/status', icon: HomeIcon, current: false },
    { name: 'Керування', href: '/dashboard/manage', icon: Cog6ToothIcon, current: false },
    { name: 'Перевiрка IP', href: '/dashboard/check', icon: RssIcon, current: false },
    { name: 'Створити сервер', href: '/dashboard/createServ', icon: GlobeAltIcon, current: false },
];

function classNames(...classes: (string | boolean)[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={() => setSidebarOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 /80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1 flex-col">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="flex w-16 justify-center py-5 bg-blackColor">
                                        <button type="button" className="-m-2.5 p-2.5 'flex-row justify-between" onClick={() => setSidebarOpen(false)}>
                                            <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 py-2 bg-blackColor ring-1 ring-white/10">
                                    <nav className="flex flex-1 flex-col">
                                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                            {navigation.map((item) => (
                                                <li key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? 'bg-gray-800 ' : ' hover: hover:bg-gray-800',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                        )}
                                                    >
                                                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto  px-6">
                    <div className="flex flex-row h-16 shrink-0 justify-between items-end">
                        <div className="font-bold text-3xl bg-gradient-to-b from-textColor to-borderColor text-transparent bg-clip-text">User</div>
                        <a href="/login" className='pb-1 hover:!bg-transparent text-textColor hover:text-borderColor '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                            </svg>
                        </a>
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7 justify-between">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-800 '
                                                        : ' hover: hover:bg-gray-800',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                )}
                                            >
                                                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            {/* <li className='h-1/3 p-2'>
                                <div className="cmd">
                                </div>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="sticky top-0 z-40 flex items-center justify-between gap-x-6  px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                <button type="button" className="-m-2.5 p-2.5  lg:hidden" onClick={() => setSidebarOpen(true)}>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <a href="/login"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                </a>
            </div>

        </>

    );
}

