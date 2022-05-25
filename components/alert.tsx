import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        hidden: !preview
      })}
    >
      <Container>
        <div className="py-2 text-sm text-center">
          <>
            This is page is a preview.{' '}
            <Link href="/api/exit-preview">
              <a className="underline transition-colors duration-200 hover:text-cyan">
                Click here
              </a>
            </Link>{' '}
            to exit preview mode.
          </>
        </div>
      </Container>
    </div>
  )
}
