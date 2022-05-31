import Link from 'next/link';

const logoNav = [
  {
    href: '/brand/logo-uniform-min',
    img: '/img/logos/solo/solo-uniform-min.svg'
  },
  {
    href: '/brand/logo-angle',
    img: '/img/logos/solo/solo-angle.svg'
  },
  {
    href: '/brand/logo-rigid-letter',
    img: '/img/logos/solo/solo-rigid-letter.svg'
  },
  {
    href: '/brand/logo-rigid',
    img: '/img/logos/solo/solo-rigid.svg'
  },
  {
    href: '/brand/logo-spring',
    img: '/img/logos/solo/solo-spring.svg'
  },
  {
    href: '/brand/logo-waveform-horizontal',
    img: '/img/logos/solo/solo-waveform-hr.svg'
  },
  {
    href: '/brand/logo-waveform',
    img: '/img/logos/solo/solo-waveform-sq.svg'
  },
  {
    href: '/brand/logo-connected',
    img: '/img/logos/solo/solo-connected.svg'
  },
  {
    href: '/brand/logo-tangled',
    img: '/img/logos/solo/solo-tangled.svg'
  },
  {
    href: '/brand/logo-stacked',
    img: '/img/logos/solo/solo-stacked.svg'
  }
];

export default function LogoNav() {
  return (
    <section className="pb-12 pt-24">
      <div className="mx-auto px-12 lg:px-48">
        <div className="grid grid-cols-3 lg:grid-cols-10 gap-10 mb-10">
          {logoNav.map((item) => (
            <Link key={item} href={item.href}>
              <a>
                <div className="bg-[#1C1C20] border border-zinc-800 rounded-2xl hover:bg-zinc-800 hover:transition-transform hover:-translate-y-2 ease-in-out duration-200 p-2 text-center group h-full flex content-center">
                  <img src={item.img} className="lg:p-6 group-hover:-translate-y-3 duration-500" alt="logo" />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
