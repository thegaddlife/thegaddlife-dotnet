import type { NextPage } from 'next';
import Link from 'next/link';
import PageHeader from '@components/pageHeader';
import { AIR1_MONITOR_ID } from '@lib/constants';
import SiteStatus from '@components/uptimeRobot/monitor';

const air1Pastoral = [
  {
    title: 'Prayer Page',
    href: 'https://design.webmob.dev/air1/prayer-marketing-page/prayer-marketing-page.html'
  }
];
const air1DonorCloud = [
  {
    title: 'Donor Cloud',
    href: 'https://design.webmob.dev/donor-cloud/donor-refresh/air1/index.html'
  },
  {
    title: 'Donor Cloud Simple',
    href: 'https://design.webmob.dev/donor-cloud/donor-refresh/air1/index-simple.html'
  }
];
const air1CookiesPermission = [
  {
    title: 'Cookies Permission',
    href: 'https://design.webmob.dev/air1/player/a1-cookies-player.html'
  }
];
const air1Marketing = [
  {
    title: 'Anxiety Campaign',
    href: 'https://design.webmob.dev/air1/anxiety-campaign/anxiety-campaign.html'
  }
];
const air1SiteDown = [
  {
    title: 'Site Down Page Production',
    href: 'https://design.webmob.dev/down-pages/official/air1/index.html'
  },
  {
    title: 'Site Down Page Stage',
    href: 'https://design.webmob.dev/down-pages/official/stage/air1/index.html'
  }
];

const Air1Web: NextPage = () => {
  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="Air1.com" subtitle="Website">
        <></>
      </PageHeader>

      {/* SYSTEM STATUS */}
      <SiteStatus monitorId={AIR1_MONITOR_ID} />

      {/* LIST COMPONENT */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex-row lg:flex gap-x-12 mx-8">
            <div className="flex-none w-96 mb-8">
              <h5 className="text-2xl font-roc text-white mb-4">Sections</h5>
              <ul className="">
                <li className="py-1">
                  <a href="#Pastoral" className="text-zinc-400 hover:text-white transition-all">
                    Pastoral Care
                  </a>
                </li>
                <li className="py-1">
                  <a href="#Marketing" className="text-zinc-400 hover:text-white transition-all">
                    Marketing Pages
                  </a>
                </li>
                <li className="py-1">
                  <a href="#DonorCloud" className="text-zinc-400 hover:text-white transition-all">
                    Donor Cloud
                  </a>
                </li>
                <li className="py-1">
                  <a href="#CookiesPermission" className="text-zinc-400 hover:text-white transition-all">
                    Cookies Permission
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1 mb-8 divide-y divide-dashed divide-zinc-600">
              <h5 className="text-2xl font-roc text-white mb-2 scroll-mt-24">Production</h5>
              <ul className="bg-zinc-800">
                <li className="">
                  <Link href="https://www.air1.com/">
                    <a target="_blank" className="text-white font-medium hover:bg-zinc-700 px-5 py-4 block transition-all">
                      Air1.com
                    </a>
                  </Link>
                </li>
              </ul>

              <h5 id="Pastoral" className="text-2xl font-roc text-white mb-2 pt-12 scroll-mt-24">
                Pastoral
              </h5>
              {air1Pastoral.map((item) => (
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

              <h5 id="Marketing" className="text-2xl font-roc text-white mb-2 pt-12 scroll-mt-24">
                Marketing Pages
              </h5>
              {air1Marketing.map((item) => (
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

              <h5 id="DonorCloud" className="text-2xl font-roc text-white mb-2 pt-12 scroll-mt-24">
                Donor Cloud
              </h5>
              {air1DonorCloud.map((item) => (
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

              <h5 id="CookiesPermission" className="text-2xl font-roc text-white mb-2 pt-12 scroll-mt-24">
                Cookies Permission
              </h5>
              {air1CookiesPermission.map((item) => (
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

              <h5 id="SiteDown" className="text-2xl font-roc text-white mb-2 pt-12 scroll-mt-24">
                Site Down
              </h5>
              {air1SiteDown.map((item) => (
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
};

export default Air1Web;
