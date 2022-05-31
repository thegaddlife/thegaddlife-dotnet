import Link from 'next/link';

export default function PageFooter() {
  return (
    <>
      <footer className="bg-zinc-900 py-16 border border-t border-zinc-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 mx-8 pb-4">
            <div className="flex justify-center md:justify-start mb-8 md:mb-0 py-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-brand-blue" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 3h9.382a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5v6H3V3z" />
              </svg>
              <p className="text-white ml-4 font-bold">WebMob</p>
            </div>

            <ul className="flex-row md:flex font-bold text-md gap-x-10 md:justify-end">
              <li className="pt-4 text-center">
                <Link href="/platforms">
                  <a className="text-zinc-500 hover:text-white py-3 whitespace-nowrap transition-all">Platforms</a>
                </Link>
              </li>
              <li className="pt-4 text-center">
                <Link href="/brand/brand-webmob">
                  <a className="text-zinc-500 hover:text-white py-3 whitespace-nowrap transition-all">Brand</a>
                </Link>
              </li>
              <li className="pt-4 text-center">
                <Link href="/features">
                  <a className="text-zinc-500 hover:text-white py-3 whitespace-nowrap transition-all">Feature Request</a>
                </Link>
              </li>
              <li className="pt-4 text-center">
                <Link href="/team">
                  <a className="text-zinc-500 hover:text-white py-3 whitespace-nowrap transition-all">The Team</a>
                </Link>
              </li>
              <li className="pt-4 text-center">
                <Link href="https://dev.azure.com/emfcorp/Technology-Web/_sprints/backlog/Web%20Team/Technology-Web/2022/March%2022%2c%202022">
                  <a className="text-zinc-500 hover:text-white py-3 whitespace-nowrap" target="_blank">
                    Sprint
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-dotted border-t border-zinc-700">
          <div className="grid justify-items-stretch grid-cols-2 lg:grid-cols-4 mx-8 pt-6">
            <div className="text-center">
              <p className="font-bold text-white mt-6 mb-3 md:mt-0">Websites</p>
              <ul>
                <li className="py-1">
                  <Link href="https://www.klove.com/">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      KLOVE.com
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="https://www.air1.com/">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      Air1.com
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="https://www.air1daretodream.com/">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      Air1DareToDream.com
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="https://www.crisisresponse.org/">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      CrisisResponse.org
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="https://www.wta.media/">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      WTA.media
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <p className="font-bold text-white mt-6 mb-3 md:mt-0">Apps</p>
              <ul>
                <li className="py-1">
                  <Link href="https://apps.apple.com/us/app/k-love/id589478573?platform=iphone">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      K-LOVE iOS
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="https://apps.apple.com/us/app/air1/id589502557?platform=iphone">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      Air1 iOS
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="https://play.google.com/store/apps/details?id=com.emf.klove&hl=en_US&gl=US">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      K-LOVE Android
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="https://play.google.com/store/apps/details?id=com.emf.air1&hl=en_US&gl=US">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      Air1 Android
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <p className="font-bold text-white mt-6 mb-3 md:mt-0">Content</p>
              <ul>
                <li className="py-1">
                  <Link href="#">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      Music Service
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="#">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      News Service
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="#">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      Promotion Service
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="#">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      Player Service
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <p className="font-bold text-white mt-6 mb-3 md:mt-0">Contacts</p>
              <ul>
                <li className="py-1">
                  <Link href="#">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      Email WebMob
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="#">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      Email Help Desk
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="#">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      ServiceNow WebMob
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="#">
                    <a target="_blank" className="text-zinc-500 hover:text-white transition-all font-medium text-sm tracking-wide">
                      ServiceNow Help Desk
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
