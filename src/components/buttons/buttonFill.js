import Link from 'next/link';

export default function ButtonFill({ title, href, target, className, children }) {
  return (
    <>
      <Link href={href}>
        <a target={target} className={`font-bold py-2 px-4 lg:py-3 lg:px-5 flex md:inline-flex items-center justify-center rounded-md ease-in-out duration-300 ${className}`} role="button" aria-labelledby={title}>
          {title}
          {children}
        </a>
      </Link>
    </>
  );
}
