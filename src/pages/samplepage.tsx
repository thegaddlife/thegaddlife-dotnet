/// This is a sample page you can use to create a new page
/// Before you start, make sure you do the following:
/// 1. Rename the file to MyNewPage.tsx  (MyNewPage would be changed to your page name)
/// 2. Change the title of SamplePage on line 10 to match the name of your page
/// 3. Change the title of SamplePage on line 26 to match the name of your page

import type { NextPage } from 'next';
import PageHeader from '@components/pageHeader';

const SamplePage: NextPage = () => {
  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="Sample Page" subtitle="Sample/Page">
        <p className="text-xl text-white lg:w-2/5">About this page</p>
      </PageHeader>

      {/* PAGE Content */}
      <div className="max-w-7xl mx-auto py-12">
        <h2 className="text-white text-xl">Hello Sample Page</h2>
      </div>
    </>
  );
};

export default SamplePage;
