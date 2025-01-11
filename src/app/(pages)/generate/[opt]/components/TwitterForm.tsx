'use client';

import {
  fetchTweetData,
  getTweetId,
  isValidTweet,
} from '@/services/fetchTweet';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const approved = true;

export function TwitterForm() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  const handleInput = async (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    console.log('value 👉', value);

    const link = value;

    if (isValidTweet(link)) {
      const tweetId = getTweetId(value);
      const tweetData = await fetchTweetData({ tweetId });

      if (tweetData) {
        console.warn('tweet 🚧', tweetData);
        setData(tweetData);
        // router.push(`/dashboard?tweetId=${tweetId}`);
        // router.push(`/dashboard?type=twitter&tweetId=${tweetId}`);
      }
    } else {
      console.log('El enlace no es válido');
    }
  };

  return (
    <div className="h-[calc(100vh-237px)] 5xs:h-[calc(100vh-192px)] grid place-items-center">
      <div className="relative">
        <div className="relative z-50 grid place-items-center text-center">
          <h1 className="text-4xl 8xs:text-5xl font-bold mb-2 w-max">
            Twitter/X Screenshot!
          </h1>
          <h2 className="text-lg font-semibold opacity-75 text-pretty w-3/4 mb-4">
            Paste your link to get started, then share it—simple as that!
          </h2>
          <div className="w-3/4">
            <form onSubmit={(e) => e.preventDefault()} className="w-full">
              <input
                onChange={(e) => handleInput(e)}
                className="rounded-md border-spacing-1 border-2 border-[#22222281] px-2 py-2 w-full mb-2"
                type="text"
                placeholder="Paste tweet URL here"
              />
              <input
                type="button"
                value="Generate Screenshot"
                onClick={() => router.push(`/dashboard?tweetId=412412`)}
                className="rounded-md bg-btn-primary-color hover:bg-btn-primary-hover transition-colors duration-150 w-full py-2 font-bold text-white pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
