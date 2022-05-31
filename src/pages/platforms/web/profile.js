import Link from 'next/link';
import PageHeader from '@components/pageHeader';
import { AIR1_PROFILE_MONITOR_ID, KLOVE_PROFILE_MONITOR_ID } from '@lib/constants';
import SiteStatus from '@components/uptimeRobot/monitor';

export default function Portal() {
  const portals = [
    {
      title: 'K-LOVE Profile - Production',
      href: 'profile.klove.com/'
    },
    {
      title: 'Air1 Profile - Production',
      href: 'profile.air1.com/'
    },
    {
      title: 'K-LOVE Profile - Design',
      href: 'https://design.webmob.dev/details/profile-emf/html/klove/index-klove.html'
    },
    {
      title: 'Air1 Profile - Design',
      href: 'https://design.webmob.dev/details/profile-emf/html/air1/index-air1.html'
    }
  ];

  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="Profile Portals" subtitle="Web"></PageHeader>

      <SiteStatus monitorId={KLOVE_PROFILE_MONITOR_ID}></SiteStatus>
      <SiteStatus monitorId={AIR1_PROFILE_MONITOR_ID}></SiteStatus>

      {/* LIST COMPONENT */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex-row lg:flex gap-x-12 mx-8">
            <div className="flex-1 mb-8 divide-y divide-dashed divide-zinc-600">
              <h5 className="text-2xl font-roc text-white mb-2 scroll-mt-24">Web Profile Portals</h5>
              {portals.map((item) => (
                <ul key={item.title} className="bg-zinc-800">
                  <li className="">
                    <Link href={item.href}>
                      <a target="_blank" className="text-white font-medium hover:bg-zinc-700 px-5 py-4 block transition-all">
                        {item.title}
                      </a>
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="">
        <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-zinc-800">
                <div className="p-12 xl:p-48">
                    <p className="text-3xl text-white mb-8">Have an idea to make the app even better? Send us a suggestion!</p>
                    <Link href="#">
                    <a className="relative inline-block uppercase tracking-wider text-sm font-bold group">
                        <span className="absolute inset-0 border-2 border-black"></span>
                        <span className="block px-6 py-3 transition-transform bg-brand-yellow border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
                           Suggest a Feature
                        </span>
                    </a>
                    </Link>
                </div>
                <div className="bg-[url('/img/air1/person-mockup-air1-app.webp')] bg-no-repeat bg-cover bg-center h-full">
                </div>
            </div>
        </div>
</section> */}
    </>
  );
}
