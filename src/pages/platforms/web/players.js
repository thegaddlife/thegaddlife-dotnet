import Link from 'next/link';
import PageHeader from '@components/pageHeader';
import { AIR1_PLAYER_MONITOR_ID, KLOVE_PLAYER_MONITOR_ID } from '@lib/constants';
import SiteStatus from '@components/uptimeRobot/monitor';

export default function WebPlayers() {
  const playersLinks = [
    {
      title: 'Web Player',
      href: 'https://design.webmob.dev/klove/player/kl-player.html'
    },
    {
      title: 'Web Player 02',
      href: 'https://design.webmob.dev/klove/player/kl-player-h.html'
    },
    {
      title: 'Web Player Promos Top',
      href: 'https://design.webmob.dev/klove/player/kl-player-promos-02.html'
    },
    {
      title: 'Web Player Bottom',
      href: 'https://design.webmob.dev/klove/player/kl-player-promos-01.html'
    }
  ];

  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="Web Players" subtitle="Web"></PageHeader>

      <SiteStatus monitorId={KLOVE_PLAYER_MONITOR_ID}></SiteStatus>
      <SiteStatus monitorId={AIR1_PLAYER_MONITOR_ID}></SiteStatus>

      {/* LIST COMPONENT */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex-row lg:flex gap-x-12 mx-8">
            <div className="flex-1 mb-8 divide-y divide-dashed divide-zinc-600">
              <h5 className="text-2xl font-roc text-white mb-2 scroll-mt-24">Web Players</h5>
              {playersLinks.map((item) => (
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
