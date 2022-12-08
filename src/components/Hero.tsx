import New from './New';
import HeroDesktop from '../assets/images/hero-desktop.png';
import HeroMobile from '../assets/images/hero-mobile.png';

const Hero = () => {
  return (
    <section className="grid gap-16 lg:grid-cols-6 lg:gap-[30px]">
      <article className="space-y-[29px] lg:col-span-4">
        <picture>
          <source srcSet={HeroDesktop} media="(min-width: 768px)" />
          <img src={HeroMobile} alt="hero" />
        </picture>
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-[30px]">
          <h1>The Bright Future of Web 3.0?</h1>
          <div className="space-y-7">
            <p className="pr-2">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button type="button" className="btn">
              Learn More
            </button>
          </div>
        </div>
      </article>
      <aside className="lg:col-span-2">
        <New />
      </aside>
    </section>
  );
};

export default Hero;
