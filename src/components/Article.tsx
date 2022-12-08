import Article1 from '../assets/images/article-1.png';
import Article2 from '../assets/images/article-2.png';
import Article3 from '../assets/images/article-3.png';

const ARTICLES = [
  {
    id: '01',
    img: Article1,
    title: 'Reviving Retro PCs',
    desc: 'What happens when old PCs are given modern upgrades?',
  },
  {
    id: '02',
    img: Article2,
    title: 'Top 10 Laptops of 2022',
    desc: 'Our best picks for various needs and budgets.',
  },
  {
    id: '03',
    img: Article3,
    title: 'The Growth of Gaming',
    desc: 'How the pandemic has sparked fresh opportunities.',
  },
];

const Article = () => {
  return (
    <section className="space-y-8">
      {ARTICLES.map((article) => (
        <div key={article.id} className="flex gap-6">
          <img src={article.img} alt={article.title} />
          <div className="flex flex-col gap-3">
            <h2 className="text-silver">{article.id}</h2>
            <div className="space-y-2">
              <h5>{article.title}</h5>
              <p>{article.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Article;
