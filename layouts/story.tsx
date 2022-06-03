import Container from 'components/Container';
import type { PropsWithChildren } from 'react';
import type { Story } from 'contentlayer/generated';

export default function StoryLayout({
  children,
  post
}: PropsWithChildren<{ post: Story }>) {
  return (
    <Container
      title={`${post.title}`}
      description={post.summary}
      image={`https://thegaddlife.com${post.image}`}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {post.readingTime.text}
          </p>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
    </Container>
  );
}
