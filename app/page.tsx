import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="bg-yellow-400 p-10 text-center w-full rounded-lg shadow-lg">
        <a href="https://mctrump.meme" target="_blank" rel="noopener noreferrer">
          <Image
            src="/mctrump.png"
            alt="McTrump Logo"
            width={400}
            height={400}
            className="mb-4 mx-auto"
          />
        </a>
        <h1 className="text-5xl font-bold text-red-600">Welcome to McTrump On Base (MTOB)</h1>
        <p className="mt-4 text-lg text-red-600">The token that delivers fun, rewards, and sustainability on the Base Chain.</p>
        <button className="mt-6 bg-secondary-color text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">Join the Movement</button>

        {/* Footer-like Section Under Hero */}
        <div className="flex gap-6 flex-wrap items-center justify-center mt-10 bg-gray-800 text-white p-4 rounded-lg">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:info@mctrump.meme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="Email icon"
              width={16}
              height={16}
            />
            Email Us
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://t.me/OfficialMcTrump"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://t.me/favicon.ico"
              alt="Telegram icon"
              width={16}
              height={16}
            />
            Telegram
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://x.com/OfficialMcTrump"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://x.com/favicon.ico"
              alt="Twitter icon"
              width={16}
              height={16}
            />
            Twitter
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="p-10 bg-gray-100 w-full rounded-lg shadow-md text-center">
        <h2 className="text-4xl font-bold text-red-600">About McTrump On Base</h2>
        <div className="mt-4 text-lg text-red-600">
          <p>Welcome to the wild world of McTrump On Base, where fun meets finance!</p>
          <p className="mt-2">Here at MTOB, we believe in making cryptocurrency exciting and rewarding for everyone. Our mission? To create a community that thrives on laughter, rewards, and a sprinkle of good ol' McDonald's magic!</p>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-red-600">Why Choose MTOB?</h3>
        <div className="mt-4">
          <ul className="list-disc list-inside text-lg text-red-600">
            <li>ETH Rewards: Enjoy 5% ETH rewards just for holding MTOB tokens!</li>
            <li>Liquidity Lock: Our 1-year liquidity lock ensures your investment is safe and sound.</li>
            <li>Community Driven: Join a vibrant community where your voice matters and fun is guaranteed!</li>
            <li>Sustainability: We’re committed to creating a sustainable ecosystem that benefits everyone.</li>
          </ul>
        </div>
        <div className="mt-4 text-lg text-red-600">
          <p>So, what are you waiting for? Dive into the McTrump experience and let’s make crypto fun together!</p>
          <p className="mt-2">Join us in our journey to revolutionize the cryptocurrency landscape, where every member is valued and every contribution counts. Together, we can build a future that is not only profitable but also enjoyable!</p>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="p-10 bg-white w-full rounded-lg shadow-md text-center">
        <h2 className="text-4xl font-bold text-red-600">Tokenomics</h2>
        <ul className="mt-4 text-lg list-none">
          <li className="mb-4 p-4 bg-yellow-400 rounded-lg shadow transition duration-300 hover:shadow-lg text-red-600">
            Token Name: 
            <div className="mt-1">McTrump On Base</div>
          </li>
          <li className="mb-4 p-4 bg-yellow-400 rounded-lg shadow transition duration-300 hover:shadow-lg text-red-600">
            Ticker: 
            <div className="mt-1">MTOB</div>
          </li>
          <li className="mb-4 p-4 bg-yellow-400 rounded-lg shadow transition duration-300 hover:shadow-lg text-red-600">
            Total Supply: 
            <div className="mt-1">1,000,000 Tokens</div>
          </li>
          <li className="mb-4 p-4 bg-yellow-400 rounded-lg shadow transition duration-300 hover:shadow-lg text-red-600">
            ETH Rewards: 
            <div className="mt-1">5% Tax ensures all holders receive ETH rewards.</div>
          </li>
          <li className="mb-4 p-4 bg-yellow-400 rounded-lg shadow transition duration-300 hover:shadow-lg text-red-600">
            1-Year Liquidity Lock for investor protection.
            <div className="mt-1"></div>
          </li>
        </ul>
      </section>

      {/* Partners Section */}
      <section className="p-10 bg-gray-200 w-full rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center text-secondary-color">Our Partners</h2>
        <p className="mt-4 text-lg text-center text-red-600">
          We collaborate with various platforms to ensure the best experience for our community.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://gempad.app/" target="_blank" rel="noopener noreferrer">
            <Image src="/gempad.png" alt="Gempad" width={150} height={150} />
          </a>
          <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/dexscreener.png" alt="Dexscreener" width={150} height={150} />
          </a>
          <a href="https://www.dextools.io/app/" target="_blank" rel="noopener noreferrer">
            <Image src="/dextools.png" alt="Dextools" width={150} height={150} />
          </a>
          <a href="https://basescan.org/" target="_blank" rel="noopener noreferrer">
            <Image src="/basescan.png" alt="Basescan" width={150} height={150} />
          </a>
          <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">
            <Image src="https://coinmarketcap.com/favicon.ico" alt="CoinMarketCap" width={150} height={150} />
          </a>
          <a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">
            <Image src="https://www.coingecko.com/favicon.ico" alt="CoinGecko" width={150} height={150} />
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="flex gap-6 flex-wrap items-center justify-center mt-10 bg-gray-800 text-white p-4 rounded-lg">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:info@mctrump.meme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="Email icon"
            width={16}
            height={16}
          />
          Email Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://t.me/OfficialMcTrump"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://t.me/favicon.ico"
            alt="Telegram icon"
            width={16}
            height={16}
          />
          Telegram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://x.com/OfficialMcTrump"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://x.com/favicon.ico"
            alt="Twitter icon"
            width={16}
            height={16}
          />
          Twitter
        </a>
      </footer>
    </div>
  );
}
