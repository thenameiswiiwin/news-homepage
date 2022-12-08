import Header from './Header';
import Hero from './Hero';
import New from './New';
import Article from './Article';

const App = () => {
  return (
    <div className="container py-7">
      <Header />
      <main className="space-y-16 pt-8">
        <Hero />
        <New />
        <Article />
      </main>
    </div>
  );
};

export default App;
