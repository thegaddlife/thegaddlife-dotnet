import type { NextPage } from 'next';
import PageHeader from '@components/pageHeader';
import { GetWorkItemsByQueryId } from '@lib/devops';
import { WorkItem } from '@lib/types';
import { useEffect, useState } from 'react';
import FeatureItemCard from '@components/devops/FeatureItemCard';

type Category = {
  id: number;
  title: string;
  subtext: string;
  queryId: number;
  image: string;
  active: boolean;
};

const Categories: Category[] = [
  {
    id: 1,
    title: 'Requests',
    subtext: 'Lorem ipsum dolor sit amet',
    queryId: 2,
    image: '/img/icons/color/map.svg',
    active: true
  },
  {
    id: 2,
    title: 'Active',
    subtext: 'Lorem ipsum dolor sit amet',
    queryId: 3,
    image: '/img/icons/color/map.svg',
    active: false
  },
  {
    id: 3,
    title: 'Closed',
    subtext: 'Lorem ipsum dolor sit amet',
    queryId: 4,
    image: '/img/icons/color/map.svg',
    active: false
  }
];

function classNames(...args: string[]) {
  return args.filter(Boolean).join(' ');
}

const Roadmap: NextPage = () => {
  const [category, setCategory] = useState(Categories[0] as Category);
  const [featureItems, setFeatureItems] = useState([] as WorkItem[]);

  function toggleCategory(selectedCategory: Category) {
    // find the current active category and set it to false
    const currentCategory = Categories.find((c) => c.id === category.id);
    if (currentCategory) {
      currentCategory.active = false;
    }

    // set the selectedCategory to active
    const nextCategory = Categories.find((c) => c.id === selectedCategory.id);
    if (nextCategory) {
      nextCategory.active = true;
    }

    setCategory(selectedCategory);
  }

  useEffect(() => {
    async function getWorkItemsData() {
      const workItems = await GetWorkItemsByQueryId(category.queryId);

      // sort by stack rank
      workItems.sort((a, b) => {
        if (a.fields['Microsoft.VSTS.Common.StackRank'] < b.fields['Microsoft.VSTS.Common.StackRank']) {
          return -1;
        }
        if (a.fields['Microsoft.VSTS.Common.StackRank'] > b.fields['Microsoft.VSTS.Common.StackRank']) {
          return 1;
        }
        return 0;
      });

      setFeatureItems(workItems);
    }
    getWorkItemsData(); // get data on component mount
  }, [category]);

  return (
    <>
      {/* PAGE HEADING */}
      <PageHeader title="Road Map" subtitle="RoadMap">
        <p className="text-xl text-white lg:w-2/5">Product Roadmap</p>
      </PageHeader>

      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {Categories.map((item) => (
            <button key={item.id} className="m-0 p-0 text-left" onClick={() => toggleCategory(item)}>
              <div className={classNames(item.active ? 'bg-zinc-800 border-zinc-600' : 'bg-zinc-900 border-zinc-800', 'border flex p-8 rounded-2xl hover:-translate-y-2 hover:bg-zinc-800 ease-in-out duration-200 h-full group')}>
                <img className="w-16 mr-8 group-hover:-translate-y-3 origin-bottom group-hover:-rotate-12 duration-500" src={item.image} alt="image alt" />
                <div className="flex-1">
                  <p className="text-white font-bold text-xl mb-2">{item.title}</p>
                  <p className="text-zinc-400">{item.subtext}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div>
          {featureItems.map((workItem) => (
            <FeatureItemCard workItem={workItem} key={workItem.id}></FeatureItemCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Roadmap;
