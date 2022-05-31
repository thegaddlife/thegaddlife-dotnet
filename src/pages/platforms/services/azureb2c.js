import Link from 'next/link';
import PageHeader from '@components/pageHeader';

export default function AzureB2C() {
  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="Azure B2C" subtitle="Authentication"></PageHeader>

      {/* LIST COMPONENT */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 mx-8 bg-zinc-800">
            <h5 className="text-white text-xl">Details about Azure B2C to come.</h5>
          </div>
        </div>
      </section>
    </>
  );
}
