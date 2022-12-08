import Nav from './Nav';
import Hero from './Hero';
import Article from './Article';

const App = () => {
  return (
    <div className="container space-y-8 py-7 lg:space-y-[61px] lg:py-32">
      <header>
        <Nav />
      </header>
      <main className="space-y-16">
        <Hero />
        <Article />
      </main>
    </div>
  );
};

export default App;
