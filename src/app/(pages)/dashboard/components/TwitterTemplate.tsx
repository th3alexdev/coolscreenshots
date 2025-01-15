import {
  TweetCommentIcon,
  TweetLikeIcon,
  TwitterIcon,
  XIcon,
} from './TemplateIcons';
import {
  FontOption,
  LogoOption,
  PaddingOption,
  ThemeOption,
  TweetData,
} from '@/types/dashboard.types';

interface TwitterTemplateProps {
  data: TweetData;
  theme: ThemeOption;
  padding: PaddingOption;
  logo: LogoOption;
  font: FontOption;
  backgroundColor?: string;
}

export default function TwitterTemplate(props: TwitterTemplateProps) {
  const {
    data: { user, tweet, media },
    theme,
    padding,
    logo,
    font,
    backgroundColor,
  } = props;

  return (
    <div
      className={`${
        theme === 'light' ? 'bg-[white] text-[#222]' : 'bg-[#010101] text-white'
      } w-full h-max max-w-[350px] px-3 py-4 rounded-lg shadow-2xl shadow-[#22222219]`}
      style={{
        padding: `${padding}px`,
      }}
    >
      <header className="relative py-1 flex gap-x-3">
        <div className="w-full max-w-[50px]">
          <img
            className="rounded-full font-bold max-w-full w-full grid place-items-center"
            src={user.profile_image_url}
            width={50}
            height={50}
            alt="User Profile"
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <p className="h-[14px] leading-3 w-max text-sm font-semibold">
            {user.name}
          </p>
          <p className="h-[14px] leading-3 w-max text-sm font-semibold opacity-75">
            {user.username}
          </p>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-3 cursor-none">
          {logo === 'new' ? <XIcon /> : logo === 'old' ? <TwitterIcon /> : null}{' '}
        </div>
      </header>
      <main className="py-1">
        <p className="text-base font-semibold">{tweet.text}</p>
        <div className="py-1">
          {media && (
            <img
              className="rounded-md"
              src={media.image_url}
              alt="Tweet Media"
            />
          )}
        </div>
        <p className="text-sm opacity-75">{tweet.timestamp}</p>
      </main>
      <div
        className={`w-full h-[0.5px]  my-0.5 ${
          theme === 'light' ? 'bg-[#00000023]' : 'bg-[#ffffff23]'
        }`}
      ></div>
      <footer className="pt-3 opacity-75 flex gap-2">
        <div className="gap-1 flex items-center">
          <TweetLikeIcon />
          <p className="text-sm font-bold">{tweet.likes}</p>
        </div>
        <div className="gap-1 flex items-center">
          <TweetCommentIcon />
          <p className="text-sm font-bold">{tweet.comments}</p>
        </div>
      </footer>
    </div>
  );
}
