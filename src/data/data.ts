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

const NEWLIST = [
  {
    title: 'Hydrogen VS Electric Cars',
    desc: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistry',
    desc: 'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    desc: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

const NAVLIST = [
  { name: 'Home' },
  { name: 'New' },
  { name: 'Popular' },
  { name: 'Trending' },
  { name: 'Categories' },
];

export { ARTICLES, NEWLIST, NAVLIST };
