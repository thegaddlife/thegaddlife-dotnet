import type { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import SystemStatus from '@components/uptimeRobot/system';
import ActiveWorkItems from '@components/devops/ActiveWorkItems';
import ClosedWorkItems from '@components/devops/ClosedWorkItems';
import CardSimple from '@components/buttons/cardSimple';

const Home: NextPage = () => {
  return (
    <>
      {/* <div className="h-[10vh] bg-gradient-to-t from-zinc-900 to-[#141417]"></div> */}

      {/* SYSTEM STATUS */}
      {/* <div className="flex md:hidden">
        <SystemStatus />
      </div> */}

      {/* HOT SPOTS */}
      <section className="bg-gradient-to-t from-zinc-900 to-[#141417]">
        <div className="max-w-7xl mx-auto py-12">
          <div className="mx-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CardSimple href="/platforms" target="_self" title="Platforms" subtext="Dive deeper into the products and platforms" img="/img/icons/color/browser-mockup.svg" alt="browser icon" className="" />
              <CardSimple href="/roadmap" target="_self" title="Roadmap" subtext="Check the status of your work requests" img="/img/icons/color/map.svg" alt="map icon" className="" />
              <CardSimple href="https://kloveair1.service-now.com/nav_to.do?uri=%2Fcom.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1%26sysparm_id%3D5f5cb2e31391ba401b7fd3228144b0e2" target="_blank" title="New Feature" subtext="Request a new feature, product or platform" img="/img/icons/color/branch.svg" alt="gitbranch icon" className="" />
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVE WORK ITEMS */}
      <section className="pt-16 lg:pt-24"></section>
      <ActiveWorkItems />

      {/* CLOSED WORK ITEMS */}
      <ClosedWorkItems />
    </>
  );
};

export default Home;
