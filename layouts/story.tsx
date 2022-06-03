import StoryContainer from 'components/StoryContainer';
import type { PropsWithChildren } from 'react';
import type { Story } from 'contentlayer/generated';

export default function StoryLayout({
  children,
  post
}: PropsWithChildren<{ post: Story }>) {
  return (
    <StoryContainer
      title={`${post.title}`}
      description={post.summary}
      image={`https://thegaddlife.com${post.image}`}
      type="article"
    >
      <h3>{post.title}</h3>
      {children}
    </StoryContainer>
  );
}
