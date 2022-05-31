import Link from 'next/link';
import PageHeader from '@components/pageHeader';
import { motion } from 'framer-motion';
// import InView, { useInView } from 'react-intersection-observer';

export default function Products() {
  const mobileApps = [
    {
      title: 'K-LOVE App',
      img: '/img/klove/kl-appicon-logo.png',
      imgAlt: 'product image',
      href: '/platforms/app/klove'
    },
    {
      title: 'Air1 App',
      img: '/img/air1/a1-appicon-logo.png',
      imgAlt: 'product image',
      href: '/platforms/app/air1'
    }
  ];

  const websites = [
    {
      title: 'K-LOVE',
      img: '/img/klove/mockups/macbook-klove.png',
      imgAlt: 'product image',
      href: '/platforms/web/klove'
    },
    {
      title: 'Air1',
      img: '/img/air1/mockups/macbook-air1.png',
      imgAlt: 'product image',
      href: '/platforms/web/air1'
    },
    {
      title: 'Crisis Response Care',
      img: '/img/crc/macbook-crc.png',
      imgAlt: 'product image',
      href: '/platforms/web/crisisresponse'
    },
    {
      title: 'Dare to Dream',
      img: '/img/dare-to-dream/product-d2d-web.webp',
      imgAlt: 'product image',
      href: '/platforms/web/daretodream'
    },
    {
      title: 'WTA',
      img: '/img/wta/product-wta-web.png',
      imgAlt: 'product image',
      href: '/platforms/web/wta'
    },
    {
      title: 'Web Players',
      img: '/img/klove/product-klove-webplayer.png',
      imgAlt: 'product image',
      href: '/platforms/web/players'
    },
    {
      title: 'Profile Portals',
      img: '/img/profile/profile-portal-thumb.png',
      imgAlt: 'product image',
      href: '/platforms/web/profile'
    }
  ];

  const serviceLayer = [
    {
      title: 'Bible',
      img: '/img/icons/color/bible.svg',
      imgAlt: 'product image',
      href: '/platforms/portals/bible-portal'
    },
    {
      title: 'Blogs',
      img: '/img/icons/color/blog.svg',
      imgAlt: 'product image',
      href: '/platforms/portals/blogs-portal'
    },

    {
      title: 'Events',
      img: '/img/icons/color/calendar.svg',
      imgAlt: 'product image',
      href: '/platforms/portals/events-portal'
    },
    {
      title: 'Music',
      img: '/img/icons/color/music.svg',
      imgAlt: 'product image',
      href: '/platforms/portals/music-portal'
    },
    {
      title: 'News',
      img: '/img/icons/color/news.svg',
      imgAlt: 'product image',
      href: '/platforms/portals/news-portal'
    },
    {
      title: 'Promotions',
      img: '/img/icons/color/promotion.svg',
      imgAlt: 'product image',
      href: '/platforms/portals/promotions-portal'
    },
    {
      title: 'Reference Data',
      img: '/img/icons/color/data.svg',
      imgAlt: 'product image',
      href: '/platforms/portals/reference-data-portal'
    }
  ];

  const productOther = [
    {
      title: 'Apple TV & Roku',
      img: '/img/appletv/appletv-thumb.jpg',
      imgAlt: 'product image',
      href: '/platforms/tv/klove'
    },
    {
      title: 'Email',
      img: '/img/email/logos-hybrid.svg',
      imgAlt: 'product image',
      href: '/platforms/email/email'
    },
    {
      title: 'Amazon Alexa',
      img: '/img/devices/amazon-alexa.webp',
      imgAlt: 'product image',
      href: '/platforms/smart-devices/alexa'
    }
  ];

  const productServices = [
    {
      title: 'Sitecore',
      img: '/img/devices/sitecore.webp',
      imgAlt: 'product image',
      href: '/platforms/services/sitecore'
    },
    {
      title: 'Siteimprove',
      img: '/img/devices/siteimprove.webp',
      imgAlt: 'product image',
      href: '/platforms/services/siteimprove'
    },
    {
      title: 'Tealium',
      img: '/img/devices/tealium.webp',
      imgAlt: 'product image',
      href: '/platforms/services/tealiumview'
    },
    {
      title: 'Azure B2C',
      img: '/img/devices/azure-b2c.webp',
      imgAlt: 'product image',
      href: '/platforms/services/azureb2c'
    },
    {
      title: 'Swiftype',
      img: '/img/devices/swiftype.webp',
      imgAlt: 'product image',
      href: '/platforms/services/swiftype'
    }
  ];

  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="Platforms" subtitle="Websites / Apps / Content">
        <p className="text-md lg:text-xl text-white max-w-2xl">Explore the products and platforms WebMob supports. You can see the latest features, workflows and designs here. The WebMob team supports more than 20 apps, websites and content delivery platforms.</p>
      </PageHeader>

      {/* WEBSITES */}
      <section className="py-16 bg-zinc-900 bg-[url('/img/shapes/shape-squiggle-line-02.svg')] bg-no-repeat bg-cover lg:bg-contain bg-center">
        <div className="max-w-7xl mx-auto px-12 sm:px-24 lg:px-8 justify-center">
          <motion.h5 className="text-2xl font-semibold font-roc text-white mb-4">Websites</motion.h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {websites.map((item) => (
              <Link href={item.href} key={item.title}>
                <a target={item.target}>
                  <motion.div className="bg-[#1C1C20] border border-zinc-800 rounded-2xl hover:bg-zinc-800 hover:transition-transform hover:-translate-y-2 ease-in-out duration-200 p-12 text-center group">
                    <img className="group-hover:-translate-y-3 duration-500" src={item.img} alt={item.imgAlt} />
                    <p className="mt-8 text-sm font-semibold text-white tracking-wide">{item.title}</p>
                  </motion.div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE APPS */}
      <section className="py-16 bg-zinc-900 bg-[url('/img/shapes/shape-squiggle-line.svg')] bg-no-repeat bg-cover lg:bg-contain bg-center">
        <div className="max-w-7xl mx-auto px-12 sm:px-24 lg:px-8 justify-center">
          <h5 className="text-2xl font-semibold font-roc text-white mb-4">Mobile Apps</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {mobileApps.map((item) => (
              <Link href={item.href} key={item.title}>
                <a>
                  <div className="bg-[#1C1C20] border border-zinc-800 rounded-2xl hover:bg-zinc-800 hover:transition-transform hover:-translate-y-2 ease-in-out duration-200 p-12 text-center group">
                    <img className="p-6 group-hover:-translate-y-3 duration-500" src={item.img} alt={item.imgAlt} />
                    <p className="mt-8 text-sm font-semibold text-white tracking-wide">{item.title}</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE LAYERS */}
      <section className="py-16 bg-zinc-900 bg-[url('/img/shapes/shape-squiggle-line.svg')] bg-no-repeat bg-cover lg:bg-contain bg-center">
        <div className="max-w-7xl mx-auto px-12 sm:px-24 lg:px-8 justify-center">
          <motion.h5 className="text-2xl font-semibold font-roc text-white mb-4">Service Portals</motion.h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {serviceLayer.map((item) => (
              <Link href={item.href} key={item.title}>
                <a target={item.target}>
                  <motion.div className="bg-[#1C1C20] border border-zinc-800 rounded-2xl hover:bg-zinc-800 hover:transition-transform hover:-translate-y-2 ease-in-out duration-200 p-12 text-center group">
                    <img className="w-full p-4 group-hover:-translate-y-3 duration-500" src={item.img} alt={item.imgAlt} />
                    <p className="mt-8 text-sm font-semibold text-white tracking-wide">{item.title}</p>
                  </motion.div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER */}
      <section className="py-16 bg-zinc-900 bg-[url('/img/shapes/shape-squiggle-line-02.svg')] bg-no-repeat bg-cover lg:bg-contain bg-center">
        <div className="max-w-7xl mx-auto px-12 sm:px-24 lg:px-8 justify-center">
          <motion.h5 className="text-2xl font-semibold font-roc text-white mb-4">Other</motion.h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {productOther.map((item) => (
              <Link href={item.href} key={item.title}>
                <a target={item.target}>
                  <motion.div className="bg-[#1C1C20] border border-zinc-800 rounded-2xl hover:bg-zinc-800 hover:transition-transform hover:-translate-y-2 ease-in-out duration-200 p-12 text-center group">
                    <img className="mx-auto group-hover:-translate-y-3 duration-500" src={item.img} alt={item.imgAlt} />
                    <p className="mt-8 text-sm font-semibold text-white tracking-wide">{item.title}</p>
                  </motion.div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-zinc-900 bg-[url('/img/shapes/shape-squiggle-line.svg')] bg-no-repeat bg-cover lg:bg-contain bg-center">
        <div className="max-w-7xl mx-auto px-12 sm:px-24 lg:px-8 justify-center">
          <motion.h5 className="text-2xl font-semibold font-roc text-white mb-4">Services</motion.h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
            {productServices.map((item) => (
              <Link href={item.href} key={item.title}>
                <a target={item.target}>
                  <motion.div className="bg-[#1C1C20] border border-zinc-800 rounded-2xl hover:bg-zinc-800 hover:transition-transform hover:-translate-y-2 ease-in-out duration-200 p-12 text-center group">
                    <img className="mx-auto group-hover:-translate-y-3 duration-500" src={item.img} alt={item.imgAlt} />
                    <p className="mt-8 text-sm font-semibold text-white tracking-wide">{item.title}</p>
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
