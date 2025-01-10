import Link from 'next/link';
import * as ICONS from './components/ui/Icons';
import Image from 'next/image';

const options = [
  {
    id: 1,
    href: '',
    name: 'Twitter/X Post',
    icon: () => <ICONS.TwitterIcon />,
  },
  {
    id: 2,
    href: '',
    name: 'Instagram Post',
    icon: () => <ICONS.InstagramIcon />,
  },
  {
    id: 3,
    href: '',
    name: 'Youtube Video',
    icon: () => <ICONS.YouTubeIcon />,
  },
];

export default function Home() {
  return (
    <div className="h-[calc(100vh-237px)] 5xs:h-[calc(100vh-192px)] grid place-items-center">
      <div className="relative">
        <div className="relative z-50 grid place-items-center text-center">
          <h1 className="text-4xl 8xs:text-5xl font-bold mb-2">
            Make beautiful screenshots!
          </h1>
          <h2 className="text-lg font-semibold opacity-75 text-pretty w-3/4 mb-10">
            Transform any social media post into stunning, shareable image
          </h2>
          <div className="flex gap-2 7xs:gap-4">
            {options.map((opt) => (
              <Link
                href="#"
                className="px-2 py-2 7xs:px-4 7xs:py-4 text-main-color rounded-xl grid place-items-center hover:bg-[#0015ff10] transition-all duration-300"
                key={opt.id}
              >
                <span className="w-full flex justify-center mb-2 pointer">
                  {opt.icon()}
                </span>
                <span className="text-sm opacity-85 pointer">{opt.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <Image
          className="absolute -bottom-80 -left-56 z-30"
          width={280}
          height={330}
          src="/assets/img/left.png"
          alt=""
        />
        <Image
          className="absolute -top-44 -right-56  z-30"
          width={280}
          height={330}
          src="/assets/img/right.png"
          alt=""
        />
      </div>
    </div>
  );
}
