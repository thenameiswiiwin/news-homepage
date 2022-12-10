import { ARTICLES } from '../data/data';

type ArticleData = {
  id: string;
  img: string;
  title: string;
  desc: string;
};

const Article = () => {
  return (
    <section className="grid gap-8 lg:grid-cols-3">
      {ARTICLES.map((article: ArticleData) => (
        <div key={article.id} className="flex gap-6">
          <img src={article.img} alt={article.title} />
          <div className="space-y-3">
            <h3 className="text-silver">{article.id}</h3>
            <div className="space-y-[9px]">
              <a href="/">
                <h5>{article.title}</h5>
              </a>
              <p>{article.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Article;
