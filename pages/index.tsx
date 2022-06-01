import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Container from '../components/Container'

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200 dark:border-gray-700">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
              theGaddLife
            </h1>
            <p className="mb-16 text-gray-600 dark:text-gray-400">
              An online Gadd Family museum of sorts.
            </p>
          </div>
        </div>

        <span className="h-16" />
      </div>
    </Container>
  )
}

export default Home
