const X_PROTOCOL = 'https://x.com/';
const TWITTER_PROTOCOL = 'https://twitter.com/';

const FETCH_HEADERS = {
  headers: {
    Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
  },
};

export const fetchTweetData = async ({ tweetId }: { tweetId: string }) => {
  console.log(`Bearer ${process.env.TWITTER_TOKEN}`);

  const response = await fetch(
    `https://api.x.com/2/tweets/${tweetId}?tweet.fields=created_at,public_metrics&expansions=author_id&user.fields=username`,
    FETCH_HEADERS
  );

  if (!response.ok) {
    console.error(
      'error al obtener los datos:',
      response.status,
      response.statusText
    );
    return null;
  }

  const tweetData = await response.json();
  return tweetData;
};

export const isValidTweet = (tweet: string) => {
  return tweet.startsWith(X_PROTOCOL) || tweet.startsWith(TWITTER_PROTOCOL);
};

export const getTweetId = (tweet: string): string => {
  const tweetId = tweet.split('/status/')[1];
  console.log('Tweet ID 👉', tweetId);
  return tweetId;
};
