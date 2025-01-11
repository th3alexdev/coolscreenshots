'use client';

import { useParams } from 'next/navigation';
import { TwitterForm } from './components/TwitterForm';

export default function Generator() {
  const { opt } = useParams();

  if (opt === 'twitter') {
    return <TwitterForm />;
  } else if (opt === 'instagram') {
    return null;
  } else if (opt === 'youtube') {
    return null;
  }

  return (
    <>
      <p>tas perdío oyó</p>
    </>
  );
}
