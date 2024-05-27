import Image from 'next/image';
import { Key } from 'react';

type AvatarProps = {
  src: string;
  alt: string;
  tooltip: string;
};

function Avatar({ src, alt, tooltip }: AvatarProps) {
  return (
    <div className="avatar avatar-xs" title={tooltip}>
      <Image
        src={src}
        alt={alt}
        className="rounded-full"
        width={24}
        height={24}
      />
    </div>
  );
}

type CardProps = {
  image: string;
  title: string;
  url: string;
  description: string;
  views: string;
  tag: string;
  date: string;
  avatars: AvatarProps[];
};

function Card({
  image,
  title,
  url,
  description,
  views,
  tag,
  date,
  avatars,
}: CardProps) {
  return (
    <div className="col-span-1 bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={image} alt={title} className="w-full h-42 object-cover" />
      <div className="p-4">
        <h5 className="text-sm text-blue-500 uppercase">{tag}</h5>
        <a
          href={url}
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          {title}
        </a>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
      <div className="px-4 py-2 bg-gray-100">
        <span className="text-xs text-gray-600">{views}</span>
        <span className="text-xs text-gray-600">{date}</span>
        <div className="flex -space-x-2 overflow-hidden">
          {avatars.map((avatar, index) => (
            <Avatar key={index} {...avatar} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const cardsData: CardProps[] = [
    {
      image: '/images/paths/sketch_430x168.png',
      title: 'Merge Duplicates Inconsistent Symbols',
      url: 'blog-post.html',
      tag: 'sketch',
      description: 'Learn about merging inconsistent symbols effectively.',
      views: '327 views',
      date: '11 Nov, 2018',
      avatars: [
        {
          src: '/images/256_luke-porter-261779-unsplash.jpg',
          alt: 'Avatar',
          tooltip: 'Janell D.',
        },
        {
          src: '/images/256_michael-dam-258165-unsplash.jpg',
          alt: 'Avatar',
          tooltip: 'Michael D.',
        },
      ],
    },
    // More cards...
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center pb-6">
        <h2 className="text-3xl font-bold">From the Blog</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
