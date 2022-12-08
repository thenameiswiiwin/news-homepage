import { useState } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Article from './Article';

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="grid place-content-center">
      <span
        className={
          isNavOpen
            ? 'absolute top-0 bottom-[-1400px] w-full bg-dark opacity-50 lg:hidden'
            : undefined
        }
      />
      <div className="container space-y-8 px-4 py-7 lg:max-w-[1110px] lg:space-y-[61px] lg:py-32">
        <header>
          <Nav handleClick={handleClick} isNavOpen={isNavOpen} />
        </header>
        <main className="space-y-16 lg:space-y-[71px]">
          <Hero />
          <Article />
        </main>
      </div>
    </div>
  );
};

export default App;
