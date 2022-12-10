import { NEWLIST } from '../data/data';

type NewListData = {
  title: string;
  desc: string;
};

const New = () => {
  return (
    <section className="flex flex-col gap-8 bg-dark py-8 px-6">
      <h2>New</h2>
      <ul className="flex flex-col gap-8">
        {NEWLIST.map((item: NewListData) => (
          <li key={item.title} className="heroNews space-y-2">
            <a href="/">
              <h4>{item.title}</h4>
            </a>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default New;
