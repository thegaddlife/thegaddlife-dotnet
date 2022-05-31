import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import SystemStatusLight from '@components/uptimeRobot/systemLight';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/', icon: '/img/icons/home.svg', current: true },
  {
    name: 'Platforms',
    href: '/platforms',
    icon: '/img/icons/products.svg',
    current: true
  },
  // {
  //   name: 'Brand',
  //   href: '/brand/brand-webmob',
  //   icon: '/img/icons/brand.svg',
  //   current: false
  // },
  {
    name: 'Feature Request',
    href: '/features',
    icon: '/img/icons/feature.svg',
    current: false
  }
  // {
  //   name: 'The Team',
  //   href: '/team',
  //   icon: '/img/icons/team.svg',
  //   current: false
  // },
  // {
  //   name: 'Sprint',
  //   href: 'https://emfcorp.visualstudio.com/Technology-Web/_boards/board/t/Web%20Team/Stories',
  //   icon: '/img/icons/sprint.svg',
  //   current: false
  // }
];

export default function PageNav() {
  return (
    <>
      <section className="w-100 sticky top-0 z-50">
        <Disclosure as="nav" className="sm:px-2 sm:py-2 lg:py-2 lg:px-8 backdrop-blur-xl bg-zinc-900/70 hover:bg-zinc-900 transition-all border-b border-zinc-800/70">
          {({ open }) => (
            <>
              <ul className="flex font-bold text-md gap-x-4 items-center">
                <motion.li
                  className="border-r border-zinc-700 pr-5"
                  initial={{
                    opacity: 0,
                    y: 5
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                >
                  <Link href="/">
                    <a className="sm:flex hidden flex-1 p-2 items-center justify-start">
                      <img src="/img/logos/official/wm-v1-color.svg" alt="webmob logo" className="w-6" />
                      <span className="text-white font-bold ml-4 text-xl">WebMob</span>
                    </a>
                  </Link>
                </motion.li>
                <motion.li
                  className="hidden md:flex"
                  initial={{
                    opacity: 0,
                    y: 5
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    delay: 0.15
                  }}
                >
                  <SystemStatusLight />
                </motion.li>
                <motion.li
                  className="ml-auto flex"
                  initial={{
                    opacity: 0,
                    y: 5
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    delay: 0.3
                  }}
                >
                  {navigation.map((item) => (
                    <li key={item.name} className="hidden sm:flex items-center">
                      {/* <img src={item.icon} alt={item.name} className="w-4 h-4 inline" /> */}
                      <Link href={item.href}>
                        <a className="py-2 px-4 text-white hover:bg-zinc-800 rounded-md transition-all whitespace-nowrap content-center text-center">{item.name}</a>
                      </Link>
                    </li>
                  ))}
                </motion.li>
              </ul>

              <div className="flex items-center sm:hidden justify-end backdrop-blur-xl bg-zinc-900/70 border-b border-zinc-800/70">
                <Link href="/">
                  <a className="flex flex-1 p-3 items-center justify-start">
                    <img src="/img/logos/official/wm-v1-color.svg" alt="webmob logo" className="w-6" />
                    <span className="text-white font-bold ml-4 text-lg">WebMob</span>
                  </a>
                </Link>
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-grey inline-flex items-center justify-center p-3 rounded-md text-gray-400 hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-2 text-center divide-y divide-dashed divide-zinc-800 bg-zinc-900">
                  {navigation.map((item) => (
                    <Disclosure.Button key={item.name} as="a" href={item.href} className={'text-white block py-4 font-medium'} aria-current={item.current ? 'page' : undefined}>
                      {/* <img src={item.icon} className="h-4 w-4 mr-2 inline" alt={item.name} /> */}
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </section>
    </>
  );
}
