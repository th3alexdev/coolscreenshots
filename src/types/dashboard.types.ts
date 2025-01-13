export type PaddingOption = '16' | '18' | '20';
export type LogoOption = 'new' | 'old' | 'none';
export type ThemeOption = 'light' | 'dark';
export type BorderOption = 'none' | 'thin' | 'thick';
export type ShadowOption = 'none' | 'small' | 'medium' | 'large';
export type BackgroundOption = {
  enabled: boolean;
  color: string;
};
export type FontOption = 'roboto' | 'opensans' | 'inter';

export interface CustomizationOptions {
  padding: PaddingOption;
  logo: LogoOption;
  theme: ThemeOption;
  border: BorderOption;
  shadow: ShadowOption;
  background: BackgroundOption;
}

export interface TweetData {
  user: {
    name: string;
    username: string;
    profile_image_url: string;
  };
  tweet: {
    text: string;
    timestamp: string;
    views: number;
    likes: number;
    retweets: number;
    comments: number;
    bookmarks: number;
  };
  media?: {
    image_url: string;
  };
}

export const tweetQA: TweetData = {
  user: {
    name: 'Are',
    username: '@pauligrafi_',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/1828249376088571905/YNZAKCUo_400x400.jpg',
  },
  tweet: {
    text: 'Romance | Esnupi Miguel (1991)\nfeliz DÍA del grito',
    timestamp: '7:01 PM · Sep 15, 2024',
    views: 61200,
    likes: 2400,
    retweets: 336,
    comments: 12,
    bookmarks: 111,
  },
  media: {
    image_url:
      'https://pbs.twimg.com/media/GXjXg8PXMAAMFDZ?format=jpg&name=large',
  },
};
