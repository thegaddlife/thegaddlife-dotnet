import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
      <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="text-gray-500 transition hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-500 transition hover:text-gray-600">
            
              About
            
          </Link>
        </div>
        <div className="flex flex-col space-y-4"></div>
        <div className="flex flex-col space-y-4"></div>
      </div>
    </footer>
  );
}
