import Header from './Header';
import Hero from './Hero';
import New from './New';

const App = () => {
  return (
    <div className="container pt-7">
      <Header />
      <main className="space-y-16 pt-8">
        <Hero />
        <New />
      </main>
    </div>
  );
};

export default App;
