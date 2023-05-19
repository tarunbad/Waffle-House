import images from './images';

const wines = [
  {
    title: 'Brussels Waffle',
    price: '$36',
    tags: 'Powdered sugar | whipped cream and fruit',
  },
  {
    title: 'Belgium Waffle',
    price: '$49',
    tags: 'Powdered sugar | whipped cream and fruit',
  },
  {
    title: 'American Waffle',
    price: '$44',
    tags: 'Toppings of fruit | Frozen waffles',
  },
  {
    title: 'Toaster Waffle',
    price: '$30',
    tags: 'Frozen waffles',
  },
  {
    title: 'Hong Kong Egg Waffles',
    price: '$26',
    tags: 'bubble waffles | Powdered sugar',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Best Waffle Experience',
    subtitle: 'Recognizes Waffle House as the ultimate destination for a remarkable waffle experience.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Waffle House has swiftly emerged as a shining beacon of culinary excellence.',
  },
  {
    imgUrl: images.award05,
    title: 'Innovative Waffle Creations',
    subtitle: 'Continuously pushing the boundaries of traditional waffle-making, introducing unique.',
  },
  {
    imgUrl: images.award03,
    title: 'Locally Sourced Excellence',
    subtitle: 'Commitment to sourcing locally and supporting their community.',
  },
];

export default { wines, cocktails, awards };
