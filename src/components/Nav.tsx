import { useState } from 'react';
import Logo from '../assets/images/logo.png';
import Hamburger from '../assets/images/hamburger.svg';
import Close from '../assets/images/close.svg';

const NAVLIST = [
  { name: 'Home' },
  { name: 'New' },
  { name: 'Popular' },
  { name: 'Trending' },
  { name: 'Categories' },
];

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => setIsNavOpen(!isNavOpen);

  return (
    <nav className="flex items-center justify-between">
      <img src={Logo} alt="w" />
      <ul className="gap-10 sm:hidden lg:flex">
        {NAVLIST.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
      {!isNavOpen && (
        <button type="button" className="lg:hidden" onClick={handleClick}>
          <img src={Hamburger} alt="hamburger menu" />
        </button>
      )}
      {isNavOpen && (
        <section className="absolute top-0 right-0 h-screen w-2/3 bg-background backdrop-blur-md">
          <div className="container h-screen pt-7 backdrop-blur">
            <button
              type="button"
              className="float-right lg:hidden"
              onClick={handleClick}
            >
              <img src={Close} alt="close hamburger" />
            </button>
            <ul className="space-y-6 pt-36">
              {NAVLIST.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </nav>
  );
};

export default Nav;
