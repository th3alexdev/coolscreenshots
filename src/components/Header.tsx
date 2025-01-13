import Link from 'next/link';
import { LanguageIcon } from './ui/Icons';
import Image from 'next/image';
import { Button, Dropdown, MenuProps } from 'antd';
import { SettingsIcon } from './ui/Icons';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'About',
  },
  {
    key: '2',
    label: 'Contact',
  },
  {
    key: '3',
    label: 'Switch Language',
    icon: <LanguageIcon />,
    extra: 'EN',
  },
];

export function Header() {
  return (
    <header className="relative z-50 py-10 px-8 text- xl w-full border-separate">
      <div className="flex justify-between max-w-[950px] mx-auto">
        <Image
          className="w-36 pointer-events-none"
          width={144}
          height={36}
          src="/assets/svg/coolscreenshots.svg"
          alt="(?)"
        />
        <div className="flex gap-8 items-center">
          <Dropdown menu={{ items }} className="8xs:hidden ">
            <Button
              style={{
                borderColor: 'transparent',
                color: 'none',
                background: 'none',
              }}
            >
              <SettingsIcon />
            </Button>
          </Dropdown>
          <div className="hidden 8xs:flex gap-8 items-center justify-between">
            <Link className="hover:underline text-bold text-lg" href={'#'}>
              About
            </Link>
            <Link className="hover:underline text-bold text-lg" href={'#'}>
              Contact
            </Link>
            <button className="flex justify-center items-center gap-2 uppercase bg-primary-light text-primary-color px-2.5 py-0.5 rounded-md text-lg">
              <LanguageIcon />
              en
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
