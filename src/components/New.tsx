const NEWLIST = [
  {
    title: 'Hydrogen VS Electric Cars',
    description: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistry',
    description:
      'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    description:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

const New = () => {
  return (
    <section className="flex flex-col gap-8 bg-dark py-8 px-6">
      <h2>New</h2>
      <ul className="flex flex-col gap-8">
        {NEWLIST.map((item) => (
          <li key={item.title} className="heroNews space-y-2">
            <a href="/">
              <h4>{item.title}</h4>
            </a>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default New;
