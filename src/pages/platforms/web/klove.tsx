import type { NextPage } from 'next';
import Link from 'next/link';
import PageHeader from '@components/pageHeader';
import { KLOVE_MONITOR_ID } from '@lib/constants';
import SiteStatus from '@components/uptimeRobot/monitor';

///
/// Section
///  - Title
///  - Array of SectionNodes
///  - SectionNode
///    - Title
///    - Href

const sections = [
  {
    title: 'Bible Service',
    id: '#BibleService',
    nodes: [
      {
        title: 'Verse Details',
        href: 'https://design.webmob.dev/klove/bible/verse-details.html'
      }
    ]
  },
  {
    title: 'Books',
    id: '#Books',
    nodes: [
      {
        title: 'Refreshed Grid',
        href: 'https://design.webmob.dev/klove/books/klove-books-home-grid.html'
      },
      {
        title: 'Books Home',
        href: 'https://design.webmob.dev/klove/books/klove-books-home-form-02.html'
      },
      {
        title: 'Book Details',
        href: 'https://design.webmob.dev/klove/books/klove-books-details-lean.html'
      }
    ]
  },
  {
    title: 'Homepage',
    id: '#Homepage',
    nodes: [
      {
        title: 'Image Right',
        href: 'https://design.webmob.dev/klove/home/kl-home-left.html'
      },
      {
        title: 'Image Left',
        href: 'https://design.webmob.dev/klove/home/kl-home-right.html'
      },
      {
        title: 'Image Full',
        href: 'https://design.webmob.dev/klove/home/kl-home-center.html'
      }
    ]
  },
  {
    title: 'Search',
    id: '#Search',
    nodes: [
      {
        title: 'Search Results',
        href: 'https://design.webmob.dev/klove/search/kl-search.html'
      },
      {
        title: 'Search Focus',
        href: 'https://design.webmob.dev/klove/search/kl-search-focus.html'
      }
    ]
  },
  {
    title: 'On Demand',
    id: '#OnDemand',
    nodes: [
      {
        title: 'On Demand Page Stripe',
        href: 'https://design.webmob.dev/klove/home/kl-ondemand-redo-1.html'
      }
    ]
  },
  {
    title: 'Pastoral',
    id: '#Pastoral',
    nodes: [
      {
        title: 'Prayer Page',
        href: 'https://design.webmob.dev/klove/prayer-marketing-page/prayer-marketing-page.html'
      },
      {
        title: 'Prayer Page Logged In',
        href: 'https://design.webmob.dev/klove/prayer-marketing-page/prayer-marketing-page-auth.html'
      },
      {
        title: 'Prayer Success Modal',
        href: 'https://design.webmob.dev/klove/prayer-marketing-page/prayer-marketing-page-success.html'
      },
      {
        title: 'Prayer Thank You Content',
        href: 'https://design.webmob.dev/klove/prayer-marketing-page/prayer-thank-you-page.html'
      },
      {
        title: 'Pastors Page',
        href: 'https://design.webmob.dev/klove/pastors-page/pastors-page.html'
      }
    ]
  },
  {
    title: 'Station Finder',
    id: '#StationFinder',
    nodes: [
      {
        title: 'Station Finder',
        href: 'https://design.webmob.dev/klove/station-finder/station-finder.html'
      }
    ]
  },
  {
    title: 'Masthead',
    id: '#Masthead',
    nodes: [
      {
        title: 'Negative Margin Block',
        href: 'https://design.webmob.dev/klove/home/kl-home-masthead-text-dark-block.html'
      },
      {
        title: 'Overlay',
        href: 'https://design.webmob.dev/klove/home/kl-home-masthead-text-overlay.html'
      },
      {
        title: 'Current Large',
        href: 'https://design.webmob.dev/klove/home/kl-home-right-lg.html'
      }
    ]
  },
  {
    title: 'Permissions',
    id: '#CookiesPermission',
    nodes: [
      {
        title: 'Accept Cookies Alert',
        href: 'https://design.webmob.dev/klove/home/kl-cookie-permissions.html'
      }
    ]
  },
  {
    title: 'Web Player',
    id: '#WebPlayer',
    nodes: [
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
    ]
  },
  {
    title: 'Artist Content',
    id: '#ArtistContent',
    nodes: [
      {
        title: 'Artist Content 01',
        href: 'https://design.webmob.dev/klove/music/kl-music-main-03.html'
      },
      {
        title: 'Artist Content 02',
        href: 'https://design.webmob.dev/klove/music/kl-music-main-04.html'
      },
      {
        title: 'Artist Details',
        href: 'https://design.webmob.dev/klove/music/kl-music-details.html'
      }
    ]
  },
  {
    title: 'Faith Blog',
    id: '#FaithBlog',
    nodes: [
      {
        title: 'Faith Blog Parenting',
        href: 'https://design.webmob.dev/klove/faith-blog/kl-faith-blog-parenting.html'
      },
      {
        title: 'Faith Blogs',
        href: 'https://design.webmob.dev/klove/faith-blog/kl-faith-blog.html'
      },
      {
        title: 'Faith Blog Category Active',
        href: 'https://design.webmob.dev/klove/faith-blog/kl-faith-blog-category.html'
      }
    ]
  },
  {
    title: 'Careers',
    id: '#Careers',
    nodes: [
      {
        title: 'Careers Unused',
        href: 'https://design.webmob.dev/klove/careers/careers-02.html'
      },
      {
        title: 'Careers Full Width Hero',
        href: 'https://design.webmob.dev/klove/careers/careers-03.html'
      },
      {
        title: 'Careers 50/50 Hero',
        href: 'https://design.webmob.dev/klove/careers/careers-04.html'
      }
    ]
  },
  {
    title: 'Site Down',
    id: '#SiteDown',
    nodes: [
      {
        title: 'Site Down Production',
        href: 'https://design.webmob.dev/down-pages/official/klove/index.html'
      },
      {
        title: 'Site Down Stage',
        href: 'https://design.webmob.dev/down-pages/official/stage/klove/index.html'
      }
    ]
  }
];

const KloveWeb: NextPage = () => {
  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="KLOVE.com" subtitle="Website">
        <></>
      </PageHeader>

      {/* SYSTEM STATUS */}
      <SiteStatus monitorId={KLOVE_MONITOR_ID} />

      {/* LIST COMPONENT */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex-row lg:flex gap-x-12 mx-8">
            <div className="flex-none w-96 mb-8">
              <h5 className="text-2xl font-roc text-white mb-4">Sections</h5>
              <ul className="">
                <li className="py-1">
                  <a href="#Books" className="text-zinc-400 hover:text-white transition-all">
                    Books
                  </a>
                </li>
                <li className="py-1">
                  <a href="#FaithBlog" className="text-zinc-400 hover:text-white transition-all">
                    Faith Blog
                  </a>
                </li>
                <li className="py-1">
                  <a href="#Pastoral" className="text-zinc-400 hover:text-white transition-all">
                    Pastoral
                  </a>
                </li>
                <li className="py-1">
                  <a href="#Careers" className="text-zinc-400 hover:text-white transition-all">
                    Careers
                  </a>
                </li>
                <li className="py-1">
                  <a href="#ArtistContent" className="text-zinc-400 hover:text-white transition-all">
                    Artist Content
                  </a>
                </li>
                <li className="py-1">
                  <a href="#OnDemand" className="text-zinc-400 hover:text-white transition-all">
                    On Demand
                  </a>
                </li>
                <li className="py-1">
                  <a href="#SiteDown" className="text-zinc-400 hover:text-white transition-all">
                    Site Down
                  </a>
                </li>
                <li className="py-1">
                  <a href="#StationFinder" className="text-zinc-400 hover:text-white transition-all">
                    Station Finder
                  </a>
                </li>
                <li className="py-1">
                  <a href="#Masthead" className="text-zinc-400 hover:text-white transition-all">
                    Masthead
                  </a>
                </li>
                <li className="py-1">
                  <a href="#Search" className="text-zinc-400 hover:text-white transition-all">
                    Search
                  </a>
                </li>
                <li className="py-1">
                  <a href="#CookiesPermission" className="text-zinc-400 hover:text-white transition-all">
                    Cookies Permission
                  </a>
                </li>
                <li className="py-1">
                  <a href="#WebPlayer" className="text-zinc-400 hover:text-white transition-all">
                    Web Player
                  </a>
                </li>
                <li className="py-1">
                  <a href="#Homepage" className="text-zinc-400 hover:text-white transition-all">
                    Homepage
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1 mb-8">
              <h5 className="text-2xl font-roc text-white mb-2 scroll-mt-24">Production</h5>
              <ul className="bg-zinc-800">
                <li className="border-b border-dashed border-zinc-600">
                  <Link href="https://www.klove.com/">
                    <a target="_blank" className="text-white font-medium hover:bg-zinc-700 px-5 py-4 block transition-all">
                      KLOVE.com
                    </a>
                  </Link>
                </li>
              </ul>

              {/* begin awesomeness */}

              {sections.map((section) => (
                <div key={section.title} className="">
                  <h5 id={section.id} className="text-2xl font-roc text-white mb-2 pt-12 scroll-mt-24">
                    {section.title}
                  </h5>
                  <ul className="bg-zinc-800">
                    {section.nodes.map((node) => (
                      <li key={node.title} className="border-b border-dashed border-zinc-600">
                        <Link href={node.href}>
                          <a target="_blank" className="text-white font-medium hover:bg-zinc-700 px-5 py-4 block transition-all">
                            {node.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* end awesomeness */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KloveWeb;
