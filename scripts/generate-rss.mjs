import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/Blog/_index.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Lee Robinson',
    site_url: 'https://thegaddlife.com',
    feed_url: 'https://thegaddlife.com/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://thegaddlife.com/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
