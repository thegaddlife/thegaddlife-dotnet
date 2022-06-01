import Link from 'next/link';

export default function CardSimple({ title, subtext, href, target, img, alt, className }) {
  return (
    <>
      <Link href={href}>
        <a target={target} role="button" aria-labelledby={title}>
          <div className={`bg-zinc-900 border border-zinc-800 flex p-4 lg:p-6 rounded-2xl hover:-translate-y-2 hover:bg-zinc-800 ease-in-out duration-200 h-full group ${className}`}>
            <img className="w-16 mr-8 group-hover:-translate-y-3 origin-bottom group-hover:-rotate-12 duration-500" src={img} alt={alt} />
            <div className="flex flex-col">
              <p className="text-white font-bold text-md lg:text-xl mb-1 lg:mb-2">{title}</p>
              <p className="text-zinc-400">{subtext}</p>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}
