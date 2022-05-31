import Link from 'next/link';
import PageHeader from '@components/pageHeader';

export default function Email() {
  const EmailLinks = [
    {
      title: 'Prayer Emails',
      href: 'https://overflow.io/s/B0T8DW08?node=c0b265ac',
      target: '_blank'
    }
  ];

  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="K-LOVE &amp; Air1" subtitle="Email"></PageHeader>

      {/* LIST COMPONENT */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex-row lg:flex gap-x-12 mx-8">
            <div className="flex-1 mb-8 divide-y divide-dashed divide-zinc-600">
              <h5 className="text-2xl font-roc text-white mb-2 scroll-mt-24">Email UI</h5>
              {EmailLinks.map((item) => (
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
        </div>
      </section>
    </>
  );
}
