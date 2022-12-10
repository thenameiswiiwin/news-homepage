import Logo from '../assets/images/logo.png';
import Hamburger from '../assets/images/hamburger.svg';
import Close from '../assets/images/close.svg';
import { NAVLIST } from '../data/data';

type NavProps = {
  isNavOpen: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

type NavListData = {
  name: string;
};

const Nav = ({ isNavOpen, handleClick }: NavProps) => {
  return (
    <nav className="flex items-center justify-between">
      <img src={Logo} alt="w" />
      <ul className="hidden gap-10 md:flex">
        {NAVLIST.map((item) => (
          <a href="/" key={item.name}>
            <li>{item.name}</li>
          </a>
        ))}
      </ul>
      {!isNavOpen && (
        <button type="button" className="lg:hidden" onClick={handleClick}>
          <img src={Hamburger} alt="hamburger menu" />
        </button>
      )}
      {isNavOpen && (
        <section className="absolute top-0 right-0 h-screen w-2/3 space-y-[86.3px] bg-background px-5 pt-[58px]">
          <button
            type="button"
            className="float-right md:hidden"
            onClick={handleClick}
          >
            <img src={Close} alt="close hamburger" />
          </button>
          <ul className="flex flex-col gap-6">
            {NAVLIST.map((item: NavListData) => (
              <a href="/" key={item.name}>
                <li>{item.name}</li>
              </a>
            ))}
          </ul>
        </section>
      )}
    </nav>
  );
};

export default Nav;
