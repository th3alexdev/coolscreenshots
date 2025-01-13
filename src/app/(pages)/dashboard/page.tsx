'use client';

import { useState } from 'react';
import TwitterTemplate from './components/TwitterTemplate';
import {
  logoOptions,
  paddingOptions,
  themeOptions,
} from '@/options/dashboard.options';
import { TweetData, tweetQA } from '@/types/dashboard.types';

type PaddingOptions = '16' | '18' | '20';
type LogoOptions = 'new' | 'old' | 'none';
type ThemeOptions = 'dark' | 'light';

export default function Dashboard() {
  const [padding, setPadding] = useState<PaddingOptions>('16');
  const [logo, setLogo] = useState<LogoOptions>('new');
  const [theme, setTheme] = useState<ThemeOptions>('light');

  return (
    <section className="grid grid-cols-[66%_35%] 5xs:h-[calc(100vh-189px)] max-w-[1150px] mx-auto">
      <div className="flex justify-center py-5 pl-8 pr-3">
        <div className="w-full bg-dashboard-bg rounded-2xl pt-8 grid place-items-center border-2 border-[#22222216]">
          <TwitterTemplate
            data={tweetQA as TweetData}
            padding={padding}
            logo={logo}
            theme={theme}
          />
        </div>
      </div>
      <div className="w-full max-w-[378px] bg-whie py-5 px-3">
        <div className="h-full w-full flex justify-center pt-10 bg-white rounded-2xl border-2 border-[#22222216]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="max-h-[200px] flex flex-col gap-y-8 w-full py-8 max-w-[250px]"
          >
            <p className="font-bold opacity-85">🎨 New options coming soon</p>
            <div className="form-group">
              <label htmlFor="padding">Padding</label>
              <div className="flex gap-x-2">
                {paddingOptions?.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`input-btn ${
                      padding === opt.value ? 'input-btn--selected' : ''
                    }`}
                    value={opt.value}
                    onClick={() => setPadding(opt.value)}
                  >
                    {`${opt.value}px`}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Logo</label>
              <div className="flex">
                {logoOptions.map((opt) => (
                  <div className="flex items-center" key={opt.id}>
                    <input
                      type="radio"
                      id={opt.value}
                      name="logo"
                      value={opt.value}
                      onClick={() => setLogo(opt.value)}
                      checked={opt.value === logo}
                    />
                    <label htmlFor={opt.value} className="pointer">
                      {opt.icon}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="theme">Theme</label>
              <div className="flex gap-x-2">
                {themeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`input-btn ${
                      theme === opt.value ? 'input-btn--selected' : ''
                    }`}
                    value={opt.value}
                    onClick={() => setTheme(opt.value as ThemeOptions)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-btn-primary-color hover:bg-btn-primary-hover transition-colors duration-200 mt-5 py-2 px-4 text-snd-text rounded-md font-semibold"
            >
              Download
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
