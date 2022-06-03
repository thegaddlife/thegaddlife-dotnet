import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { RoughNotation } from 'react-rough-notation';

import Container from '../components/Container';

export default function Home({}) {
  return (
    <Container>
      <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                padding={6}
                color="#ff4df9"
                strokeWidth={7}
                animationDelay={500}
                animationDuration={1200}
              >
                theGaddLife
              </RoughNotation>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-200 sm:mt-4">
              An online Gadd family museum (of sorts)
            </p>
          </div>
          <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:max-w-none lg:grid-cols-3">
            <Link href="/stories/my-memories">
              <a
                className={cn(
                  'transform hover:scale-[1.05] transition-all',
                  'rounded-xl shadow-lg w-full bg-gradient-to-r p-1',
                  'from-[#D8B4FE] to-[#818CF8]'
                )}
              >
                <div className="flex flex-col overflow-hidden rounded-xl">
                  <div className="flex-shrink-0">
                    <Image
                      width="1536"
                      height="2048"
                      layout="raw"
                      className="object-cover w-full h-48"
                      alt="Eugene in Hawaii"
                      src="/static/images/my-memories/navy-1.jpeg"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-800">
                    <div className="flex-1">
                      <p className="w-20 px-2 py-1 mb-4 text-sm font-medium text-center text-white bg-indigo-500 rounded dark:text-indigo-300">
                        <a href="#" className="hover:underline">
                          {' '}
                          Story{' '}
                        </a>
                      </p>

                      <p className="text-xl font-semibold text-gray-900 dark:text-white">
                        <RoughNotation
                          type="underline"
                          show={true}
                          color="#6EE7B7"
                          strokeWidth={3}
                          animationDelay={1000}
                          animationDuration={1200}
                        >
                          My Memories
                        </RoughNotation>
                      </p>
                      <p className="mt-3 text-base text-gray-500 dark:text-gray-200">
                        A personal memoir from Gene Gadd. Written for his wife,
                        children and grandchildren.
                      </p>
                    </div>
                    <div className="flex items-center mt-6">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">Eugene Gadd</span>
                          <Image
                            layout="raw"
                            width="256"
                            height="256"
                            className="w-10 h-10 border-2 border-indigo-600 rounded-full"
                            src="/static/images/authors/eugene.jpeg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          <a href="#" className="hover:underline">
                            {' '}
                            Eugene Gadd{' '}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-100">
                          <time dateTime="1999-06-01"> June 1st, 1999 </time>
                          <span aria-hidden="true"> &middot; </span>
                          <span> 16 min read </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
