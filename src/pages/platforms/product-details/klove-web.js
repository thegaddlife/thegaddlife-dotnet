import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

export default function KloveWebDetails() {
  return (
    <>
      {/* INTRO */}
      <section className="max-w-5xl mx-auto py-32">
        <div className="mx-8">
          <p className="text-brand-blue text-xl font-bold mb-4">In progress</p>
          <h2 className="text-white text-lg lg:text-2xl leading-relaxed lg:leading-normal">Discover what goes into creating klove.com! The teams, the people, the content and technology that comes together to reach millions of monthly listeners and viewers.</h2>
        </div>
      </section>

      {/* IMGS */}
      <section className="bg-zinc-900 lg:py-32 border-t border-zinc-700">
        <div className="max-w-7xl mx-auto relative">
          <img src="/img/shapes/shape-line-circa.svg" alt="desc" className="absolute w-48 -left-8 md:-left-20 -top-12 overflow-hidden" />
          <img src="/img/shapes/shape-line-circa-2.svg" alt="desc" className="absolute w-48 -bottom-20 lg:-right-4 right-0 overflow-hidden" />
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <motion.div
              className="w-full h-full col-span-2 row-span-2 min-h-96 md:col-start-3 md:row-start-1 aspect-square relative"
              viewport={{ once: false }}
              initial={{
                opacity: 0,
                x: 100
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{
                ease: 'easeIn',
                duration: 0.5
              }}
            >
              <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-zinc-900"></div>
              <span className="absolute bottom-14 left-6 text-brand-blue text-xs tracking-widest uppercase">Mobile Apps</span>
              <span className="absolute bottom-4 left-6 text-white text-3xl font-roc font-semibold">K-LOVE &amp; Air1</span>
              <img alt="desc" src="/img/air1/person-mockup-air1-app-800.webp" className="overflow-hidden" />
            </motion.div>
            <motion.div
              className="w-full h-full min-h-48 aspect-square relative"
              viewport={{ once: false }}
              initial={{
                opacity: 0,
                x: -100
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{
                ease: 'easeIn',
                duration: 0.5
              }}
            >
              <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-zinc-900"></div>
              <span className="absolute bottom-12 left-6 text-brand-blue text-xs tracking-widest uppercase">TV Apps</span>
              <span className="absolute bottom-4 left-6 text-white text-md lg:text-xl font-roc font-semibold">Apple TV &amp; Roku</span>
              {/* <img alt="desc" src="/img/shapes/shape-squiggle-horizontal.svg" className="absolute -left-12 -top-4 w-48" /> */}
              <img alt="desc" src="/img/klove/tv-mockup-klove-800.webp" className="overflow-hidden" />
            </motion.div>
            <motion.div
              className="w-full h-full min-h-48 aspect-square relative"
              viewport={{ once: false }}
              initial={{
                opacity: 0,
                y: -100
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                ease: 'easeIn',
                duration: 0.5
              }}
            >
              <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-zinc-900"></div>
              <span className="absolute bottom-12 left-6 text-brand-blue text-xs tracking-widest uppercase">Websites</span>
              <span className="absolute bottom-4 left-6 text-white text-md lg:text-xl font-roc font-semibold">KLOVE.com</span>
              <img alt="desc" src="/img/klove/web-mockup-klove-800.webp" className="overflow-hidden" />
            </motion.div>
            <motion.div
              className="w-full h-full min-h-48 aspect-square relative"
              viewport={{ once: false }}
              initial={{
                opacity: 0,
                y: 100
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                ease: 'easeIn',
                duration: 0.5
              }}
            >
              <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-zinc-900"></div>
              <span className="absolute bottom-12 left-6 text-brand-blue text-xs tracking-widest uppercase">Carplay</span>
              <span className="absolute bottom-4 left-6 text-white text-md lg:text-xl font-roc font-semibold">Connected Devices</span>
              <img alt="desc" src="/img/klove/app-mockup-klove-800.webp" className="overflow-hidden" />
            </motion.div>
            <motion.div
              className="w-full h-full min-h-48 aspect-square relative"
              viewport={{ once: false }}
              initial={{
                opacity: 0,
                x: 100
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{
                ease: 'easeIn',
                duration: 0.5
              }}
            >
              <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-zinc-900"></div>
              <span className="absolute bottom-12 left-6 text-brand-blue text-xs tracking-widest uppercase">Smart Speakers</span>
              <span className="absolute bottom-4 left-6 text-white text-md lg:text-xl font-roc font-semibold">Alexa</span>
              <img alt="desc" className="w-full h-full min-h-48 aspect-square overflow-hidden" src="/img/air1/person-mockup-air1-app-800.webp" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
