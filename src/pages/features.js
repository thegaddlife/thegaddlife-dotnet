import Link from 'next/link';
import ButtonFill from '@components/buttons/buttonFill';
import PageHeader from '@components/pageHeader';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <>
      <PageHeader title="Feature Request" subtitle="Our Process"></PageHeader>

      {/* FIRST SECTION */}
      <section className="bg-zinc-900 border-b border-zinc-600 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="mx-8 xl:mr-16">
              <motion.img
                src="/img/illo/illo-01.svg"
                alt="desc"
                className="w-full mx-auto drop-shadow-xl"
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
                  delay: 0.25
                }}
              ></motion.img>
            </div>
            <motion.div
              className="mx-12 lg:mx-8"
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
                delay: 0.25
              }}
            >
              <h2 className="font-roc font-bold text-3xl lg:text-5xl mb-4 text-white">Overview</h2>
              <p className="text-lg text-white">All work requests go through an intake process. The purpose of this is to spend a small amount of time prioritizing requests so the WebMob team knows what order it should work on things, and why that work is important to the business. Getting context around why the work is needed helps the team determine the right solution.</p>
              <div className="mt-8">
                <ButtonFill href="https://kloveair1.service-now.com/nav_to.do?uri=%2Fcom.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1%26sysparm_id%3D5f5cb2e31391ba401b7fd3228144b0e2" title="Submit a Request" className="text-white border-2 border-brand-purple bg-brand-purple hover:bg-brand-purple/80" target="_blank"></ButtonFill>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="lg:py-32 bg-zinc-900 border-b border-zinc-600 bg-[url('/img/shapes/shape-squiggle-line-thin.svg')] bg-no-repeat bg-cover lg:bg-contain bg-center">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center pt-24 lg:pt-12 mx-8">
            <div className="mb-16 lg:mr-16">
              <motion.div
                className="bg-dots-med border border-zinc-700 p-8 md:p-16 mb-32"
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
                  delay: 0.15
                }}
              >
                <motion.img
                  src="/img/illo/illo-num-1.svg"
                  alt="desc"
                  className="h-28 md:mr-12 mb-6 -mt-24 lg:-mt-32"
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
                    delay: 0.25
                  }}
                ></motion.img>
                <h3 className="mb-4 text-3xl lg:text-4xl font-bold font-roc text-white">Receive Initial Request</h3>
                <p className="mb-4 text-lg text-white">Requests to do work can come from anyone and anywhere. An MLT member, an email, or a ticket in ServiceNow, a customer calling Audience Engagement or a team member seeing an opportunity for improvement. The first step in the intake process is to make sure all requests are received and evaluated. To make it as easy as possible for the people needing our services, the WebMob team accepts requests via any method the requestor chooses.</p>
              </motion.div>
              <motion.div
                className="bg-dots-med border border-zinc-700 p-8 md:p-16"
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
                  delay: 0.25
                }}
              >
                <motion.img
                  src="/img/illo/illo-num-2.svg"
                  alt="desc"
                  className="h-28 md:mr-12 mb-6 -mt-24 lg:-mt-32"
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
                    delay: 0.25
                  }}
                ></motion.img>
                <h3 className="mb-4 text-3xl lg:text-4xl font-bold font-roc text-white">Request Evaluation</h3>
                <p className="mb-4 text-lg text-white">There are two main paths all work can go down. Each path manages the work differently so the first step when evaluating a request is determining which type of work is being requested.</p>
              </motion.div>
            </div>
            <motion.div
              className="mb-16"
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
                delay: 0.25
              }}
            >
              <img src="/img/illo/illo-02.svg" alt="desc" className="w-full drop-shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}
      <section className="bg-zinc-900 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-16 items-center">
            <motion.div
              className="mx-12 lg:mx-8"
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
                delay: 0.25
              }}
            >
              <img src="/img/illo/illo-feature.svg" alt="desc" className="w-72 lg:w-3/5 mx-auto drop-shadow-xl" />
              <h3 className="mt-16 mb-4 text-4xl font-bold font-roc text-center text-white">Project Requests</h3>
              <p className="text-center text-lg text-white">The technology equivalent is feature enhancement requests, new capabilities, and technology updates that take a significant amount of time. Since there is a finite amount of work we can do at a time, project work is prioritized based on business needs and value.</p>
              <div className="mt-8 text-center">
                <ButtonFill href="https://kloveair1.service-now.com/nav_to.do?uri=%2Fcom.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1%26sysparm_id%3D5f5cb2e31391ba401b7fd3228144b0e2" title="Request a Feature" className="text-white border-2 border-brand-purple bg-brand-purple hover:bg-brand-purple/80" target="_blank"></ButtonFill>
              </div>
            </motion.div>
            <motion.div
              className="mx-12 lg:mx-8"
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
                delay: 0.5
              }}
            >
              <img src="/img/illo/illo-maint.svg" alt="desc" className="w-72 lg:w-3/5 mx-auto drop-shadow-xl" />
              <h3 className="mt-16 mb-4 text-4xl font-bold font-roc text-center text-white">Maintenance Requests</h3>
              <p className="text-center text-lg text-white">The technology equivalent is fixing bugs, updating content, and regular platform tuning. The work is put into a Kanban board with priority defaulting to first come first serve. There is an emergency process that jumps the line for issues that have a significant customer impact.</p>
              <div className="mt-8 text-center">
                <ButtonFill href="https://kloveair1.service-now.com/nav_to.do?uri=%2Fcom.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1%26sysparm_id%3D5f5cb2e31391ba401b7fd3228144b0e2" title="Report a Bug" className="text-white border-2 border-brand-purple bg-brand-purple hover:bg-brand-purple/80" target="_blank"></ButtonFill>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
