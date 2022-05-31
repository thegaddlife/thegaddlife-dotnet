import Link from 'next/link';
import PageHeader from '@components/pageHeader';

export default function Alexa() {
  const AlexaLinks = [
    {
      title: 'Alexa Google Play',
      href: 'https://play.google.com/store/apps/details?id=com.amazon.dee.app&hl=en_US&gl=US',
      target: '_blank'
    },
    {
      title: 'Alexa iOS',
      href: 'https://apps.apple.com/us/app/amazon-alexa/id944011620',
      target: '_blank'
    }
  ];

  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="Amazon Alexa" subtitle="Smart Speaker"></PageHeader>

      {/* LIST COMPONENT */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex-row lg:flex gap-x-12 mx-8">
            <div className="flex-1 mb-8 divide-y divide-dashed divide-zinc-600">
              <h5 className="text-2xl font-roc text-white mb-2 scroll-mt-24">Download the Alexa App</h5>
              {AlexaLinks.map((item) => (
                <ul key={item.title} className="bg-zinc-800">
                  <li className="">
                    <Link href={item.href}>
                      <a target={item.target} className="text-white font-medium hover:bg-zinc-700 px-5 py-4 block transition-all">
                        {item.title}
                      </a>
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="p-8 mx-8 bg-zinc-800">
            <p className="text-brand-blue text-md mb-4 font-bold">How to get the skill:</p>
            <h5 className="text-white text-xl">Download the Amazon Alexa app. Then search for &quot;K-LOVE Radio&quot; and &quot;Air1 Radio&quot; in the skills store.</h5>
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
