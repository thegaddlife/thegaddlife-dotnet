import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="border-t bg-accent-1 border-accent-2">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row"></div>
      </Container>
    </footer>
  )
}
