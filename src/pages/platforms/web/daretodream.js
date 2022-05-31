import Link from 'next/link';
import PageHeader from '@components/pageHeader';
import { D2D_MONITOR_ID } from '@lib/constants';
import SiteStatus from '@components/uptimeRobot/monitor';

export default function dareWeb() {
  const dareWebsite = [
    {
      title: 'Website Wireframe',
      href: 'https://design.webmob.dev/details/dare-to-dream/views/dare-to-dream.html'
    },
    {
      title: 'Marketing Page Hero',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/homepage-official-03.html'
    },
    {
      title: 'Marketing Page Video',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/homepage-video.html'
    },
    {
      title: 'Email Placeholders',
      href: 'https://design.webmob.dev/details/dare-to-dream/views/email-initial-contact.html'
    }
  ];
  const dareProgram = [
    {
      title: 'Hybrid Login',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/client-login.html'
    },
    {
      title: 'Student Logi',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/client-student-login.html'
    },
    {
      title: 'Facilitator Login',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/client-teacher-login.html'
    },
    {
      title: 'Facilitator Login Setup',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/program-instructor-preface.html'
    },
    {
      title: 'Student View Program',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/program-student.html'
    },
    {
      title: 'Facilitator View Program',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/program-instructor.html'
    }
  ];
  const dareAdminPortal = [
    {
      title: 'Home',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/d2d-emf-home.html'
    },
    {
      title: 'Invite a School',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/d2d-emf-dashboard-invite.html'
    },
    {
      title: 'Requests',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/d2d-emf-dashboard-requests.html'
    },
    {
      title: 'School',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/d2d-emf-schools.html'
    },
    {
      title: 'Program Results',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/d2d-emf-programs.html'
    }
  ];
  const dareSchoolPortal = [
    {
      title: 'Home',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/client-home.html'
    },
    {
      title: 'Settings',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/client-profile.html'
    },
    {
      title: 'Presentations',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/client-presentations-full.html'
    },
    {
      title: 'Short Videos Row',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/client-short-videos.html'
    },
    {
      title: 'Short Videos 2x2',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/client-short-videos-02.html'
    },
    {
      title: 'My Programs',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/client-programs.html'
    },
    {
      title: 'My Programs / Results',
      href: 'https://design.webmob.dev/details/dare-to-dream-02/client-program-results.html'
    }
  ];

  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="Dare to Dream" subtitle="Website"></PageHeader>

      <SiteStatus monitorId={D2D_MONITOR_ID}></SiteStatus>

      {/* LIST COMPONENT */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex-row lg:flex gap-x-12 mx-8">
            <div className="flex-none w-96 mb-8">
              <h5 className="text-2xl font-roc text-white mb-4">Sections</h5>
              <ul className="">
                <li className="py-1">
                  <a href="#DareMarketing" className="text-zinc-400 hover:text-white transition-all">
                    Marketing Site
                  </a>
                </li>
                <li className="py-1">
                  <a href="#DareProgram" className="text-zinc-400 hover:text-white transition-all">
                    Programs
                  </a>
                </li>
                <li className="py-1">
                  <a href="#DareAdminPortal" className="text-zinc-400 hover:text-white transition-all">
                    Admin Portal
                  </a>
                </li>
                <li className="py-1">
                  <a href="#DareSchoolPortal" className="text-zinc-400 hover:text-white transition-all">
                    School Portal
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1 mb-8 divide-y divide-dashed divide-zinc-600">
              <h5 className="text-2xl font-roc text-white mb-2 scroll-mt-24">Production Site</h5>
              <ul className="bg-zinc-800">
                <li className="">
                  <Link href="https://www.air1daretodream.com/">
                    <a target="_blank" className="text-white font-medium hover:bg-zinc-700 px-5 py-4 block transition-all">
                      Air1daretodream.com
                    </a>
                  </Link>
                </li>
              </ul>

              <h5 id="DareMarketing" className="text-2xl font-roc text-white mb-2 pt-12 scroll-mt-24">
                Marketing Site
              </h5>
              {dareWebsite.map((item) => (
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

              <h5 id="DareProgram" className="text-2xl font-roc text-white mb-2 pt-12 scroll-mt-24">
                Programs
              </h5>
              {dareProgram.map((item) => (
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

              <h5 id="DareAdminPortal" className="text-2xl font-roc text-white mb-2 pt-12 scroll-mt-24">
                Admin Portal
              </h5>
              {dareAdminPortal.map((item) => (
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

              <h5 id="DareSchoolPortal" className="text-2xl font-roc text-white mb-2 pt-12 scroll-mt-24">
                School Portal
              </h5>
              {dareSchoolPortal.map((item) => (
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
    </>
  );
}
