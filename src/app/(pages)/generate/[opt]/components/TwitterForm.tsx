const X_PROTOCOL = 'https://x.com/';
const TWITTER_PROTOCOL = 'https://twitter.com/';

const HEADERS = {
  headers: {
    Authorization: '.',
  },
};

export function TwitterForm() {
  const handleInput = async (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    console.log('value 👉', value);

    const link = value;
    const isValid =
      link.startsWith(X_PROTOCOL) || link.startsWith(TWITTER_PROTOCOL);

    if (isValid) {
      console.log('El enlace es válido 👉', link);

      const tweetId = link.split('/status/')[1];
      console.log('Tweet ID 👉', tweetId);

      const response = await fetch(
        `https://api.x.com/2/tweets/${tweetId}?tweet.fields=created_at,public_metrics&expansions=author_id&user.fields=username`,
        HEADERS
      );

      if (!response.ok) {
        console.error(
          'Error al obtener los datos:',
          response.status,
          response.statusText
        );
        return;
      }

      const tweetData = await response.json();
      console.log('Información del tweet', tweetData);
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
                className="rounded-md bg-main-color hover:bg-main-hover-color transition-colors duration-150 w-full py-2 font-bold text-white pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
