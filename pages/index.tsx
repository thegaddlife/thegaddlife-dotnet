import type { NextPage } from 'next'
import React from 'react'
import CardSimple from '@components/buttons/CardSimple'

const Home: NextPage = () => {
  return (
    <>
      <section className="bg-gradient-to-t from-zinc-900 to-[#141417]">
        <div className="py-12 mx-auto max-w-7xl">
          <div className="mx-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <CardSimple
                href="/my-memories"
                target="_self"
                title="My Memories"
                subtext="Memories recorded by Dad in 1999"
                img="/img/icons/color/blog.svg"
                alt="browser icon"
                className=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
