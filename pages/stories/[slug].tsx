import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import StoryLayout from 'layouts/story';
import { allStories } from 'contentlayer/generated';
import type { Story } from 'contentlayer/generated';

export default function Post({ post, tweets }: { post: Story; tweets: any[] }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <StoryLayout post={post}>
      <Component
        components={
          {
            ...components
          } as any
        }
      />
    </StoryLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allStories.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allStories.find((post) => post.slug === params.slug);
  return { props: { post } };
}
