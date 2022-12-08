import New from './New';
import HeroDesktop from '../assets/images/hero-desktop.png';
import HeroMobile from '../assets/images/hero-mobile.png';

const Hero = () => {
  return (
    <section className="space-y-16">
      <article className="space-y-6">
        <picture>
          <source srcSet={HeroDesktop} media="(min-width: 1400px)" />
          <img src={HeroMobile} alt="hero" />
        </picture>
        <div className="space-y-4">
          <h1>The Bright Future of Web 3.0?</h1>
          <div>
            <p className="pb-6">
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
      <aside>
        <New />
      </aside>
    </section>
  );
};

export default Hero;
