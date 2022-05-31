import ButtonFill from '@components/buttons/buttonFill';
import PageHeader from '@components/pageHeader';
import Monitor from '@components/uptimeRobot/monitor';
import { PROMOS_MONITOR_ID } from '@lib/constants';

export default function NewsPortalDetails() {
  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="Promotions" subtitle="Content Service">
        <p className="text-md lg:text-xl text-white max-w-2xl mb-8">This tool provides a way to manage Promotions and Promotion Schedules for display on K-LOVE and Air1 websites. During pledge drives, prize Incentives are created and managed using the Promotions Portal.</p>
        <ButtonFill href="https://promos.corpemf.com/" target="_blank" title="Visit Promotions Portal" className="text-white border-2 border-brand-purple bg-brand-purple hover:bg-brand-purple/80">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </ButtonFill>
        <ButtonFill href="https://web.microsoftstream.com/video/3697443d-5a91-461e-8c7b-147abbf8a3e6" target="_blank" title="Promotions Training Video" className="text-white border-2 border-brand-purple hover:bg-brand-purple/80 ease-in-out duration-300 md:ml-4 md:mt-0 mt-4"></ButtonFill>
        <ButtonFill href="https://web.microsoftstream.com/video/88c09053-a4cd-44ec-a1d4-4ace83160e94" target="_blank" title="Incentives Training Video" className="text-white border-2 border-brand-purple hover:bg-brand-purple/80 ease-in-out duration-300 md:ml-4 md:mt-0 mt-4"></ButtonFill>
      </PageHeader>

      {/* PERMISSIONS */}
      <section className="py-16 px-8 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center">
          <img src="/img/icons/color/lock.svg" alt="illustration of a lock" className="w-8 mr-3" />
          <h4 className="text-white font-roc text-xl mt-3 font-semibold">Permissions:</h4>
        </div>
        <div className="max-w-7xl mx-auto">
          <ul className="ml-12 mt-4 list-disc text-white">
            <li>Users are required to be in AD Group: Application-Promos-Users</li>
          </ul>
        </div>
      </section>

      {/* UPTIME STATUS */}
      <Monitor monitorId={PROMOS_MONITOR_ID}></Monitor>
    </>
  );
}
