import Link from 'next/link';
import PageHeader from '@components/pageHeader';
import { CRC_MONITOR_ID } from '@lib/constants';
import SiteStatus from '@components/uptimeRobot/monitor';

export default function Air1Web() {
  const crcArchitecture = [
    {
      title: 'Information Architecture',
      href: 'https://app.flowmapp.com/share/8938dad9257e2c9440299524ecc22657/userflow/80088/'
    }
  ];
  const crcWebsite = [
    {
      title: 'Home Full Width',
      href: 'https://design.webmob.dev/crc/crc-home.html'
    },
    {
      title: 'Home Left 50/50',
      href: 'https://design.webmob.dev/crc/crc-home-angle.html'
    },
    {
      title: 'Article View',
      href: 'https://design.webmob.dev/crc/crc-article.html'
    },
    {
      title: 'Search View',
      href: 'https://design.webmob.dev/crc/crc-search-header.html'
    },
    {
      title: 'Class Listing',
      href: 'https://design.webmob.dev/crc/crc-class-list.html'
    },
    {
      title: 'Class Details',
      href: 'https://design.webmob.dev/crc/crc-class-details.html'
    },
    {
      title: 'Class Details Video',
      href: 'https://design.webmob.dev/crc/crc-class-details-video.html'
    },
    {
      title: 'Instructor Bio',
      href: 'https://design.webmob.dev/crc/crc-intructor-bio.html'
    },
    {
      title: 'Form View',
      href: 'https://design.webmob.dev/crc/crc-form.html'
    },
    {
      title: 'Podcast View',
      href: 'https://design.webmob.dev/crc/crc-podcast.html'
    },
    {
      title: 'Resources Facets',
      href: 'https://design.webmob.dev/crc/crc-resources.html'
    },
    {
      title: 'FAQs View',
      href: 'https://design.webmob.dev/crc/crc-faqs.html'
    }
  ];
  const crcSiteDown = [
    {
      title: 'Site Down Production',
      href: 'https://design.webmob.dev/down-pages/official/crc/index.html'
    },
    {
      title: 'Site Down Stage',
      href: 'https://design.webmob.dev/down-pages/official/stage/crc/index.html'
    }
  ];
  const crcDonorCloud = [
    {
      title: 'Donor Cloud',
      href: 'https://design.webmob.dev/donor-cloud/crc-donor-cloud.html'
    }
  ];
  const crcCookiesPermission = [
    {
      title: 'Cookies Permission',
      href: 'https://design.webmob.dev/crc/crc-cookie-permissions.html'
    }
  ];

  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="Crisis Response Care" subtitle="Website"></PageHeader>

      <SiteStatus monitorId={CRC_MONITOR_ID} />

      {/* LIST COMPONENT */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex-row lg:flex gap-x-12 mx-8">
            <div className="flex-none w-96 mb-8">
              <h5 className="text-2xl font-roc text-white mb-4">Sections</h5>
              <ul className="">
                <li className="py-1">
                  <a href="#CrisisInfoArch" className="text-zinc-400 hover:text-white transition-all">
                    Info Architecture
                  </a>
                </li>
                <li className="py-1">
                  <a href="#CrisisWebsite" className="text-zinc-400 hover:text-white transition-all">
                    Website Design
                  </a>
                </li>
                <li className="py-1">
                  <a href="#CrisisSiteDown" className="text-zinc-400 hover:text-white transition-all">
                    Site Down
                  </a>
                </li>
                <li className="py-1">
                  <a href="#CookiesPermission" className="text-zinc-400 hover:text-white transition-all">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1 mb-8 divide-y divide-dashed divide-zinc-600">
              <h5 className="text-2xl font-roc text-white mb-2 scroll-mt-24">Production</h5>
              <ul className="bg-zinc-800">
                <li className="">
                  <Link href="https://www.crisisresponse.org/">
                    <a target="_blank" className="text-white font-medium hover:bg-zinc-700 px-5 py-4 block transition-all">
                      Crisisresponse.com
                    </a>
                  </Link>
                  <Link href="https://design.webmob.dev/crc/crc-design-system.html">
                    <a target="_blank" className="text-white font-medium hover:bg-zinc-700 px-5 py-4 block transition-all">
                      Style Guide
                    </a>
                  </Link>
                </li>
              </ul>

              <h5 id="CrisisInfoArch" className="text-2xl font-roc text-white mb-2 pt-12 scroll-mt-24">
                Information Architecture
              </h5>
              {crcArchitecture.map((item) => (
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

              <h5 id="CrisisWebsite" className="text-2xl font-roc text-white mb-2 pt-12 scroll-mt-24">
                Crisis Response Care Website
              </h5>
              {crcWebsite.map((item) => (
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

              <h5 id="CrisisDonorCloud" className="text-2xl font-roc text-white mb-2 pt-12 scroll-mt-24">
                Donor Cloud
              </h5>
              {crcDonorCloud.map((item) => (
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
              {crcCookiesPermission.map((item) => (
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

              <h5 id="CrisisSiteDown" className="text-2xl font-roc text-white mb-2 pt-12 scroll-mt-24">
                Site Down
              </h5>
              {crcSiteDown.map((item) => (
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
