import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const navigation = [
  { name: 'Home', href: '/', icon: '/img/icons/home.svg', current: true },
  {
    name: 'Platforms',
    href: '/platforms',
    icon: '/img/icons/products.svg',
    current: true
  },
  {
    name: 'Brand',
    href: '/brand/brand-webmob',
    icon: '/img/icons/brand.svg',
    current: false
  },
  {
    name: 'Feature Request',
    href: '/features',
    icon: '/img/icons/feature.svg',
    current: false
  },
  {
    name: 'The Team',
    href: '/team',
    icon: '/img/icons/team.svg',
    current: false
  },
  {
    name: 'Sprint',
    href: 'https://emfcorp.visualstudio.com/Technology-Web/_boards/board/t/Web%20Team/Stories',
    icon: '/img/icons/sprint.svg',
    current: false
  }
];

export default function MenuDropdown() {
  return (
    <div className="text-right fixed z-50 top-6 right-6 max-w-7xl">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-5 py-3 text-sm font-medium text-white ease-in-out duration-300 rounded-lg backdrop-blur-xl bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-800 focus:outline-none">Menu</Menu.Button>
        </div>
        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right backdrop-blur-xl bg-zinc-900/80 border border-zinc-800 rounded-xl shadow-lg focus:outline-none">
            <ul className="py-2">
              {navigation.map((item) => (
                <li key={item.name} className="opacity-50 hover:opacity-100 hover:translate-x-2 transition-all flex items-center px-6">
                  <img src={item.icon} alt={item.name} className="w-4 h-4 inline" />
                  <Link href={item.href}>
                    <a className="py-3 px-2 text-white whitespace-nowrap content-center text-center text-sm font-bold">{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
