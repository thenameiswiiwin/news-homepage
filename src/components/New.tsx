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
    <section className="space-y-1.5 bg-dark px-5 pt-8">
      <h2>New</h2>
      <ul>
        {NEWLIST.map((item) => (
          <li key={item.title} className="heroNews space-y-1 py-7">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default New;
