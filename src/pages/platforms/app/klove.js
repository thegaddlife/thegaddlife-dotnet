import Link from 'next/link';
import PageHeader from '@components/pageHeader';

export default function KloveApp() {
  const kloveApp = [
    {
      title: 'Current Iteration',
      href: 'https://overflow.io/s/KHHJA4DE'
    },
    {
      title: 'Developer Specs',
      href: 'https://projects.invisionapp.com/d/login?redir=%2Fd%2Fmain%3Forigin%3Dv7&origin=v7#/projects/prototypes/19952477'
    }
  ];

  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="K-LOVE App" subtitle="iOS &amp; Android"></PageHeader>

      {/* LIST COMPONENT */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex-row lg:flex gap-x-12 mx-8">
            <div className="flex-1 mb-8 divide-y divide-dashed divide-zinc-600">
              <h5 className="text-2xl font-roc text-white mb-2 scroll-mt-24">App UI/UX</h5>
              {kloveApp.map((item) => (
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
