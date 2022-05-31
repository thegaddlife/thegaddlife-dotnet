import ButtonPrimary from '@components/buttons/buttonPrimary';
import PageHeader from '@components/pageHeader';
import Monitor from '@components/uptimeRobot/monitor';
import { BLOGS_MONITOR_ID } from '@lib/constants';
import Link from 'next/link';

export default function NewsPortalDetails() {
  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="Blogs" subtitle="Content Service">
        <p className="text-md lg:text-xl text-white max-w-2xl mb-8">This tool is used to create and manage blog posts across all of EMF&#39;s brands.</p>
        <ButtonPrimary href="https://blogs.corpemf.com/" target="_blank" title="Visit Blogs Portal">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </ButtonPrimary>
        <Link href="https://web.microsoftstream.com/video/1e9ac875-dc37-41fc-be68-1358e0d5d53b">
          <a className="text-white font-bold py-2 px-4 lg:py-3 lg:px-5 flex md:inline-flex items-center justify-center rounded-md border-2 border-brand-purple hover:bg-brand-purple/80 ease-in-out duration-300 md:ml-4 md:mt-0 mt-4" role="button" target="_blank">
            Blog Training Video
          </a>
        </Link>
      </PageHeader>

      {/* PERMISSIONS */}
      <section className="py-16 px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center">
          <img src="/img/icons/color/lock.svg" alt="illustration of a lock" className="w-8 mr-3" />
          <h4 className="text-white font-roc text-xl mt-3 font-semibold">Permissions:</h4>
        </div>
        <div className="max-w-7xl mx-auto">
          <ul className="ml-12 mt-4 list-disc text-white">
            <li>Admin users are required to be in AD Group: Application-Blogs-Admins</li>
            <li>Request user access to blog areas by contacting WebMob</li>
          </ul>
        </div>
      </section>

      {/* UPTIME STATUS */}
      <Monitor monitorId={BLOGS_MONITOR_ID}></Monitor>
    </>
  );
}
