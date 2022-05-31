import Link from 'next/link';
import PageHeader from '@components/pageHeader';
import { WTA_MONITOR_ID } from '@lib/constants';
import SiteStatus from '@components/uptimeRobot/monitor';

export default function wtaSite() {
  const wtaLinks = [
    {
      title: 'Visit wta.media',
      href: 'https://www.wta.media/'
    }
  ];

  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="WTA.media" subtitle="Web"></PageHeader>

      <SiteStatus monitorId={WTA_MONITOR_ID}></SiteStatus>

      {/* LIST COMPONENT */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex-row lg:flex gap-x-12 mx-8">
            <div className="flex-1 mb-8 divide-y divide-dashed divide-zinc-600">
              <h5 className="text-2xl font-roc text-white mb-2 scroll-mt-24">Web Profile Portals</h5>
              {wtaLinks.map((item) => (
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
    </>
  );
}
