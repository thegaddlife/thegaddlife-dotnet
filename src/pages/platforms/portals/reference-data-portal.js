import ButtonPrimary from '@components/buttons/buttonPrimary';
import PageHeader from '@components/pageHeader';
import Monitor from '@components/uptimeRobot/monitor';
import { REFDATA_MONITOR_ID } from '@lib/constants';

export default function NewsPortalDetails() {
  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="Reference Data" subtitle="Content Service">
        <p className="text-md lg:text-xl text-white max-w-2xl mb-8">This tool is used to manage several characteristics of interaction tracking such as Tealium events, UTMs and Topics.</p>
        <ButtonPrimary href="https://refdata.corpemf.com/" target="_blank" title="Visit Reference Data Portal">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </ButtonPrimary>
      </PageHeader>

      {/* PERMISSIONS */}
      <section className="py-16 px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center">
          <img src="/img/icons/color/lock.svg" alt="illustration of a lock" className="w-8 mr-3" />
          <h4 className="text-white font-roc text-xl mt-3 font-semibold">Permissions:</h4>
        </div>
        <div className="max-w-7xl mx-auto">
          <ul className="ml-12 mt-4 list-disc text-white">
            <li>Users are required to be in AD Group: Application-ReferenceData-Users</li>
          </ul>
        </div>
      </section>

      {/* UPTIME STATUS */}
      <Monitor monitorId={REFDATA_MONITOR_ID}></Monitor>
    </>
  );
}
