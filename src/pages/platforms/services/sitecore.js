import Link from 'next/link';
import PageHeader from '@components/pageHeader';

export default function SitecoreDetails() {
  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="Sitecore" subtitle="CMS"></PageHeader>

      {/* LIST COMPONENT */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 mx-8 bg-zinc-800">
            <h5 className="text-white text-xl">Details about Sitecore to come.</h5>
          </div>
        </div>
      </section>
    </>
  );
}
