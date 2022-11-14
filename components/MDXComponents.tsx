import Link from 'next/link';
import Image from "next/image";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return (
    <Image
      alt={props.alt}
      className="rounded-lg"
      {...props}
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  );
}

function StoryImage(props) {
  return (
    <figure>
      <div>
        <img
          className=""
          src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
          alt="Whitney leaning against a railing on a downtown street"
          width={1184 / 3}
          height={1376 / 3}
        />
      </div>
      <figcaption>
        <span>Photograph by Marcus O’Leary</span>
      </figcaption>
    </figure>
  );
}

function Callout(props) {
  return (
    <div className="flex p-4 bg-gray-200 rounded-lg dark:bg-gray-800">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const MDXComponents = {
  Image: RoundedImage,
  StoryImage,
  a: CustomLink,
  Callout
};

export default MDXComponents;
