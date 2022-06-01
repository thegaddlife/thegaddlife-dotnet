import Container from 'components/Container'
import { PropsWithChildren } from 'react'

export type StoryMeta = {
  title: string
  description: string
}

export default function StoryLayout({
  children,
  meta,
}: PropsWithChildren<{ meta: StoryMeta }>) {
  return (
    <Container
      title={`theGaddLife | ${meta.title}`}
      description={meta.description}
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          {meta.title}
        </h1>
        <div className="w-full prose dark:prose-dark">{children}</div>
      </article>
    </Container>
  )
}
