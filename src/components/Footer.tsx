import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="py-6 bg-footer-bg">
      <div className="px-5 flex flex-wrap items-center justify-center  gap-y-4 5xs:gap-y-0 5xs:justify-between 5xs:items-center max-w-[950px] mx-auto">
        <div className="relative z-40 flex gap-2 w-max bg-white px-2 py-0.5">
          <p className="font-medium">Designed and built by</p>
          <Link
            target="_blank"
            href={'https://bento.me/alexanderperez'}
            className="flex gap-1 grayscale hover:grayscale-0 transition-all duration-100 underline 5xs:hover:underline 5xs:no-underline"
          >
            <span className="font-bold pointer">Alex</span>
            <Image
              className="pointer"
              src="/assets/img/corazoncito.png"
              width={25}
              height={12}
              alt="(?)"
            />
          </Link>
        </div>
        <div>
          <p className="font-medium px-4 py-0.5 rounded-full outline-none outline-2 outline-[#222] bg-footer-background opacity-65 text-base pointer">
            Support this project!
          </p>
        </div>
      </div>
    </footer>
  );
}
