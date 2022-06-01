import Link from 'next/link';

export default function ButtonPrimary({ title, href, target, children }) {
  return (
    <>
      <Link href={href}>
        <a target={target} className="text-white bg-brand-purple font-bold py-2 px-4 lg:py-3 lg:px-5 flex md:inline-flex items-center justify-center rounded-md border-2 border-brand-purple hover:bg-brand-purple/80 ease-in-out duration-300" role="button" aria-labelledby={title}>
          {title}
          {children}
        </a>
      </Link>
    </>
  );
}
