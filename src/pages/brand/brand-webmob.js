import PageHeader from '@components/pageHeader';

export default function Home() {
  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader title="Brand" subtitle="WebMob"></PageHeader>

      {/* <section className="pt-24 pb-32 bg-dots-dark">
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="font-roc font-black text-6xl lg:text-9xl text-center text-white">WebMob</h1>
            <p className="text-xl mx-auto lg:max-w-2xl text-center text-white">Bright colors for bright team members. Messy shapes and arrows showing direction and process. A heavy substantial typeface to communicate reliability and strength.</p>
        </div>
    </section> */}

      <section className="bg-dots-light">
        <div className="max-w-6xl flex flex-col lg:flex-row gap-x-6 mx-auto px-8 xl:px-0 pt-16 ">
          <div className="flex-1 mb-4">
            <a href="" className="relative block group h-48 lg:h-64">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>
              <div className="relative flex items-end h-full transition-transform transform bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="10" cy="6" r="4" fill="#000000" opacity="0.1" strokeWidth="0"></circle>
                    <circle cx="10" cy="6" r="4"></circle>
                    <path d="M15.67,22a2,2,0,0,0,1.92-2.56A7.8,7.8,0,0,0,10,14a7.8,7.8,0,0,0-7.59,5.44A2,2,0,0,0,4.34,22Z" fill="#000000" opacity="0.1" strokeWidth="0"></path>
                    <path d="M15.67,22a2,2,0,0,0,1.92-2.56A7.8,7.8,0,0,0,10,14a7.8,7.8,0,0,0-7.59,5.44A2,2,0,0,0,4.34,22Z"></path>
                    <path d="M16.83,3.17a4.13,4.13,0,0,1,.86,1.27,4.08,4.08,0,0,1,0,3.12,4.13,4.13,0,0,1-.86,1.27"></path>
                    <path d="M21.8,19.86A11.12,11.12,0,0,0,18,13.5"></path>
                  </svg>
                  <h2 className="mt-4 text-2xl font-roc font-medium">Team</h2>
                </div>

                <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#8348ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="10" cy="6" r="4" fill="#8348ff" opacity="0.1" strokeWidth="0"></circle>
                    <circle cx="10" cy="6" r="4"></circle>
                    <path d="M15.67,22a2,2,0,0,0,1.92-2.56A7.8,7.8,0,0,0,10,14a7.8,7.8,0,0,0-7.59,5.44A2,2,0,0,0,4.34,22Z" fill="#8348ff" opacity="0.1" strokeWidth="0"></path>
                    <path d="M15.67,22a2,2,0,0,0,1.92-2.56A7.8,7.8,0,0,0,10,14a7.8,7.8,0,0,0-7.59,5.44A2,2,0,0,0,4.34,22Z"></path>
                    <path d="M16.83,3.17a4.13,4.13,0,0,1,.86,1.27,4.08,4.08,0,0,1,0,3.12,4.13,4.13,0,0,1-.86,1.27"></path>
                    <path d="M21.8,19.86A11.12,11.12,0,0,0,18,13.5"></path>
                  </svg>
                  <h2 className="mt-4 text-2xl font-roc font-medium">Meet the Team</h2>
                </div>
              </div>
            </a>
          </div>

          <div className="flex-1 mb-4">
            <a href="" className="relative block group h-48 lg:h-64">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>
              <div className="relative flex items-end h-full transition-transform transform bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="15" height="7" rx="2" fill="#000000" opacity="0.1" strokeWidth="0"></rect>
                    <rect x="2" y="2" width="15" height="7" rx="2"></rect>
                    <path d="M17,5h3a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2H14a2,2,0,0,0-2,2v5"></path>
                  </svg>
                  <h2 className="mt-4 text-2xl font-roc font-medium">Brand</h2>
                </div>

                <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#3eee91" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="15" height="7" rx="2" fill="#3eee91" opacity="0.1" strokeWidth="0"></rect>
                    <rect x="2" y="2" width="15" height="7" rx="2"></rect>
                    <path d="M17,5h3a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2H14a2,2,0,0,0-2,2v5"></path>
                  </svg>
                  <h2 className="mt-4 text-2xl font-roc font-medium">See our Brand</h2>
                </div>
              </div>
            </a>
          </div>

          <div className="flex-1 mb-4">
            <a href="" className="relative block group h-48 lg:h-64">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>
              <div className="relative flex items-end h-full transition-transform transform bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.66,12.34l-7.95,8a1,1,0,0,1-1.42,0L3.34,12.34a4.59,4.59,0,0,1,0-6.49l.09-.08a4.59,4.59,0,0,1,5.73-.62l3.05,2,2.59-1.8a4.61,4.61,0,0,1,5.86.53h0A4.59,4.59,0,0,1,20.66,12.34Z" fill="#000000" opacity="0.1" strokeWidth="0"></path>
                    <path d="M20.66,12.34l-7.95,8a1,1,0,0,1-1.42,0L3.34,12.34a4.59,4.59,0,0,1,0-6.49l.09-.08a4.59,4.59,0,0,1,5.73-.62l3.05,2,2.59-1.8a4.61,4.61,0,0,1,5.86.53h0A4.59,4.59,0,0,1,20.66,12.34Z"></path>
                  </svg>
                  <h2 className="mt-4 text-2xl font-roc font-medium">Placeholder</h2>
                </div>

                <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#fe3ac6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.66,12.34l-7.95,8a1,1,0,0,1-1.42,0L3.34,12.34a4.59,4.59,0,0,1,0-6.49l.09-.08a4.59,4.59,0,0,1,5.73-.62l3.05,2,2.59-1.8a4.61,4.61,0,0,1,5.86.53h0A4.59,4.59,0,0,1,20.66,12.34Z" fill="#fe3ac6" opacity="0.1" strokeWidth="0"></path>
                    <path d="M20.66,12.34l-7.95,8a1,1,0,0,1-1.42,0L3.34,12.34a4.59,4.59,0,0,1,0-6.49l.09-.08a4.59,4.59,0,0,1,5.73-.62l3.05,2,2.59-1.8a4.61,4.61,0,0,1,5.86.53h0A4.59,4.59,0,0,1,20.66,12.34Z"></path>
                  </svg>
                  <h2 className="mt-4 text-2xl font-roc font-medium">Placeholder</h2>
                </div>
              </div>
            </a>
          </div>

          <div className="flex-1 mb-4">
            <a href="" className="relative block group h-48 lg:h-64">
              <span className="absolute inset-0 border-2 border-black border-dashed"></span>
              <div className="relative flex items-end h-full transition-transform transform bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22,4V14a2,2,0,0,1-2,2H14L8,21V16H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20A2,2,0,0,1,22,4Z" fill="#2b2b2b" opacity="0.1" strokeWidth="0"></path>
                    <path d="M22,4V14a2,2,0,0,1-2,2H14L8,21V16H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20A2,2,0,0,1,22,4Z"></path>
                  </svg>
                  <h2 className="mt-4 text-2xl font-roc font-medium">Need Help?</h2>
                </div>

                <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#ffe350" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22,4V14a2,2,0,0,1-2,2H14L8,21V16H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20A2,2,0,0,1,22,4Z" fill="#ffe350" opacity="0.1" strokeWidth="0"></path>
                    <path d="M22,4V14a2,2,0,0,1-2,2H14L8,21V16H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20A2,2,0,0,1,22,4Z"></path>
                  </svg>
                  <h2 className="mt-4 text-2xl font-roc font-medium">Get in Touch</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* <div className="relative">
        <img src="/img/review/brand/shape-squiggle-line.svg" className="left-0 top-0 absolute w-[100vw] z-[-1]" alt="messy play image"></img>
    </div> */}

      <section className="bg-dots-light py-24 px-8">
        <p className="text-3xl font-roc mb-6 max-w-6xl mx-auto">Color</p>

        <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="">
            <div className="bg-[#000] p-4 lg:p-8">
              <h5 className="font-roc text-xl lg:text-2xl font-bold text-white">Black</h5>
              <p className="text-white opacity-50 uppercase">#000000</p>
            </div>
          </div>
          <div className="">
            <div className="bg-[#8348FF] p-4 lg:p-8">
              <h5 className="font-roc text-xl lg:text-2xl font-bold text-white">Purple</h5>
              <p className="text-white opacity-50 uppercase">#8348FF</p>
            </div>
          </div>
          <div className="">
            <div className="bg-[#FE3AC6] p-4 lg:p-8">
              <h5 className="font-roc text-xl lg:text-2xl font-bold text-white">Magenta</h5>
              <p className="opacity-50 uppercase">#FE3AC6</p>
            </div>
          </div>
          <div className="">
            <div className="bg-[#FFE350] p-4 lg:p-8">
              <h5 className="font-roc text-xl lg:text-2xl font-bold">Yellow</h5>
              <p className="opacity-50 uppercase">#FFE350</p>
            </div>
          </div>
          <div className="">
            <div className="bg-[#4FF0FF] p-4 lg:p-8">
              <h5 className="font-roc text-xl lg:text-2xl font-bold">Cyan</h5>
              <p className="opacity-50 uppercase">#4FF0FF</p>
            </div>
          </div>
          <div className="">
            <div className="bg-[#3EEE91] p-4 lg:p-8">
              <h5 className="font-roc text-xl lg:text-2xl font-bold">Green</h5>
              <p className="opacity-50 uppercase">#3EEE91</p>
            </div>
          </div>
          <div className="">
            <div className="bg-[#E9E9E9] p-4 lg:p-8">
              <h5 className="font-roc text-xl lg:text-2xl font-bold">Gray</h5>
              <p className="opacity-50 uppercase">#E9E9E9</p>
            </div>
          </div>
          <div className="">
            <div className="bg-[#FFFFFF] border p-4 lg:p-8">
              <h5 className="font-roc text-xl lg:text-2xl font-bold">White</h5>
              <p className="opacity-50 uppercase">#FFFFFF</p>
            </div>
          </div>
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className="py-24 px-8 bg-[#000] bg-[url('/img/shapes/shape-squiggle-line.svg')] bg-no-repeat bg-cover lg:bg-contain bg-center">
        <p className="text-3xl font-roc mb-6 max-w-6xl mx-auto text-white">Typography</p>
        <div className="my-8 max-w-6xl mx-auto divide-y divide-dashed">
          <span className="text-[#4FF0FF]">Roc Grotesk</span>
          <p className="p-8 font-roc text-4xl lg:text-8xl mt-4 font-bold text-white">A wizard&apos;s job is to vex chumps quickly in fog!</p>
          <h1 className="p-8 text-white font-roc font-black text-6xl">Heading 1</h1>
          <h2 className="p-8 text-white font-roc text-5xl">Heading 2</h2>
          <h3 className="p-8 text-white font-roc text-4xl">Heading 3</h3>
          <h4 className="p-8 text-white font-roc text-3xl">Heading 4</h4>
          <h5 className="p-8 text-white font-roc text-2xl">Heading 5</h5>
          <h6 className="p-8 text-white font-roc text-md">Heading 6</h6>
          <p className="p-8 text-white leading-8 text-xl">Paragraph</p>
        </div>
      </section>

      {/* SOME CONTENT */}
      <section className="py-16 mx-8 bg-white">
        <p className="text-3xl font-roc mb-6 max-w-6xl mx-auto">Timeline UI</p>
        <div className="dark:bg-coolGray-800 dark:text-coolGray-100">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:mx-auto sm:before:mx-0 before:dark:bg-brand-purple">
                  <h3 className="text-3xl font-semibold font-roc">Heading</h3>
                  <span className="text-sm font-bold tracking-wider uppercase">Subhead</span>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-coolGray-700">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-brand-purple">
                    <h3 className="text-xl font-semibold tracking-wide">Item title</h3>
                    <time className="text-xs tracking-wide uppercase">Date 2022</time>
                    <p className="mt-3">Caramels dessert sugar plum dessert sweet roll tart. Powder donut toffee candy canes ice cream toffee carrot cake. Brownie tootsie roll cake dragée marzipan.</p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-brand-purple">
                    <h3 className="text-xl font-semibold tracking-wide">Item title</h3>
                    <time className="text-xs tracking-wide uppercase">Date 2022</time>
                    <p className="mt-3">Caramels dessert sugar plum dessert sweet roll tart. Powder donut toffee candy canes ice cream toffee carrot cake. Brownie tootsie roll cake dragée marzipan.</p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-brand-purple">
                    <h3 className="text-xl font-semibold tracking-wide">Item title</h3>
                    <time className="text-xs tracking-wide uppercase">Date 2022</time>
                    <p className="mt-3">Caramels dessert sugar plum dessert sweet roll tart. Powder donut toffee candy canes ice cream toffee carrot cake. Brownie tootsie roll cake dragée marzipan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 mx-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mx-8">
            <div className="container mx-auto flex flex-col p-6">
              <p className="text-3xl font-roc mb-6 max-w-6xl">Detailed List UI</p>
              <div className="divide-y divide-coolGray-700">
                <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                  <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
                      <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
                      <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
                      <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                    <span className="mb-2 text-xs tracking-wider font-semibold uppercase dark:text-brand-purple">Step 1 Subhead</span>
                    <span className="text-xl font-semibold font-roc md:text-2xl">Segment Title</span>
                    <span className="mt-4 dark:text-coolGray-300">Oat cake gummi bears powder danish sugar plum oat cake icing lollipop chupa chups. Cotton candy jelly beans marshmallow danish jujubes biscuit. Jujubes candy wafer gummies macaroon muffin chocolate bar jelly halvah.</span>
                  </div>
                </div>
                <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                  <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
                      <path d="M285.177,179l15.513-3.914-7.827-31.028-15.514,3.913a176.937,176.937,0,0,0-129.3,133.557l-3.407,15.633,31.266,6.814,3.406-15.634A145.559,145.559,0,0,1,285.177,179Z"></path>
                      <path d="M363.624,147.871C343.733,72.077,274.643,16,192.7,16,95.266,16,16,95.266,16,192.7c0,82.617,57,152.163,133.735,171.4A176.769,176.769,0,0,0,320.7,496c97.431,0,176.7-79.266,176.7-176.695C497.392,238.071,441.64,167.336,363.624,147.871ZM48,192.7C48,112.91,112.91,48,192.7,48s144.7,64.91,144.7,144.7-64.911,144.7-144.7,144.7S48,272.481,48,192.7ZM320.7,464c-60.931,0-115.21-38.854-135.843-94.792,2.6.115,5.214.184,7.843.184a176.862,176.862,0,0,0,32.7-3.047l97.625,97.625C322.247,463.983,321.473,464,320.7,464Zm41.528-6.083L260.26,355.954a176.9,176.9,0,0,0,43.662-26.072L408.37,434.33A144.385,144.385,0,0,1,362.223,457.917Zm69.3-45.692L326.851,307.557a177.082,177.082,0,0,0,27.911-44.5L457.67,365.964A144.661,144.661,0,0,1,431.519,412.225Zm33.594-84.073-99.42-99.42a176.785,176.785,0,0,0,3.7-36.036c0-3.285-.1-6.547-.276-9.787a145.054,145.054,0,0,1,96.276,136.4C465.392,322.276,465.291,325.224,465.113,328.152Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                    <span className="mb-2 text-xs tracking-wider font-semibold uppercase dark:text-brand-purple">Step 2 Subhead</span>
                    <span className="text-xl font-semibold font-roc md:text-2xl">Segment Title</span>
                    <span className="mt-4 dark:text-coolGray-300">Oat cake gummi bears powder danish sugar plum oat cake icing lollipop chupa chups. Cotton candy jelly beans marshmallow danish jujubes biscuit. Jujubes candy wafer gummies macaroon muffin chocolate bar jelly halvah.</span>
                  </div>
                </div>
                <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                  <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
                      <path d="M412.284,294.37l-12.5,15.642c-8.354,10.454-50.027,64.208-50.027,95.883,0,36.451,28.049,66.105,62.526,66.105s62.527-29.654,62.527-66.105c0-31.675-41.673-85.429-50.028-95.883Zm0,145.63c-16.832,0-30.526-15.3-30.526-34.105,0-11.662,15.485-37.883,30.531-59.2,15.043,21.3,30.522,47.509,30.522,59.2C442.811,424.7,429.116,440,412.284,440Z"></path>
                      <path d="M122.669,51.492,96.133,124.4,30.092,97.205,17.908,126.8l67.271,27.7L26.9,314.606a48.056,48.056,0,0,0,28.689,61.523l184.719,67.232a48,48,0,0,0,61.523-28.688L397.6,151.56Zm149.1,352.236a16,16,0,0,1-20.508,9.563L66.537,346.059a16,16,0,0,1-9.563-20.507L73.553,280H316.8ZM85.2,248l29.594-81.311,36.333,14.961a32.644,32.644,0,1,0,11.236-29.98l-36.615-15.077,16.046-44.085,214.79,78.177L328,249.219V248Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                    <span className="mb-2 text-xs tracking-wider font-semibold uppercase dark:text-brand-purple">Step 3 Subhead</span>
                    <span className="text-xl font-semibold font-roc md:text-2xl">Segment Title</span>
                    <span className="mt-4 dark:bg-coolGray-800 dark:text-coolGray-300">Oat cake gummi bears powder danish sugar plum oat cake icing lollipop chupa chups. Cotton candy jelly beans marshmallow danish jujubes biscuit. Jujubes candy wafer gummies macaroon muffin chocolate bar jelly halvah.</span>
                  </div>
                </div>
                <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                  <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
                      <polygon points="388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82"></polygon>
                      <polygon points="148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181"></polygon>
                      <polygon points="330.529 16 297.559 16 178.441 496 211.412 496 330.529 16"></polygon>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                    <span className="mb-2 text-xs tracking-wider font-semibold uppercase dark:text-brand-purple">Step 4 Subhead</span>
                    <span className="text-xl font-semibold font-roc md:text-2xl">Segment Title</span>
                    <span className="mt-4 dark:text-coolGray-300">Oat cake gummi bears powder danish sugar plum oat cake icing lollipop chupa chups. Cotton candy jelly beans marshmallow danish jujubes biscuit. Jujubes candy wafer gummies macaroon muffin chocolate bar jelly halvah.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
