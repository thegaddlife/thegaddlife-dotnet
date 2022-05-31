import Link from 'next/link';
import PageHeader from '@components/pageHeader';
import { motion } from 'framer-motion';

export default function Products() {
  const teamMembers = [
    {
      title: 'Anthony Huscher',
      role: 'Sr. Manager of Consumer Application',
      img: '/img/team/marty-mcfly.webp',
      imgAlt: 'product image',
      href: '#'
    },
    {
      title: 'Jason Mulcahy',
      role: 'Senior Software Engineer',
      img: '/img/team/obi-wan.webp',
      imgAlt: 'product image',
      href: '#'
    },
    {
      title: 'Becky Anderson',
      role: 'Web Administration Lead',
      img: '/img/team/elastagirl.webp',
      imgAlt: 'product image',
      href: '#'
    },
    {
      title: 'Ryan Houk',
      role: 'Experience Designer & Developer',
      img: '/img/team/lemongrab.webp',
      imgAlt: 'product image',
      href: '#'
    },
    {
      title: 'Reese Freeman',
      role: 'Senior Software Engineer',
      img: '/img/team/buzz.webp',
      imgAlt: 'product image',
      href: '#'
    },
    {
      title: 'Mike Perrenoud',
      role: 'Senior Software Engineer',
      img: '/img/team/thanos.webp',
      imgAlt: 'product image',
      href: '#'
    }
  ];

  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="The Team" subtitle="WebMob"></PageHeader>

      {/* FIRST SECTION */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-12 sm:px-24 lg:px-8 justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {teamMembers.map((item) => (
              <Link href={item.href} key={item.title}>
                <a>
                  <motion.div
                    className="bg-[#1C1C20] border border-zinc-800 rounded-2xl hover:bg-zinc-800 hover:transition-transform hover:-translate-y-2 ease-in-out duration-200 p-12 text-center h-full"
                    viewport={{ once: false }}
                    initial={{
                      opacity: 0,
                      y: 10
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      duration: 0.1,
                      delay: 0.15
                    }}
                  >
                    <div className="flex justify-center">
                      <img className="h-40 lg:h-64" src={item.img} alt={item.imgAlt} />
                    </div>
                    <p className="mt-8 text-md font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-zinc-400">{item.role}</p>
                  </motion.div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
