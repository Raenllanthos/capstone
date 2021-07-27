import * as heroAPI from "./fakeTypeDatabase";

const heroes = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Toilet Man",
    herotype: { _id: "5b21ca3eeb7f6fbccd471814", type: "Villain" },
    power: "Cleans Toilets",
    comicsAppearedIn: 6,
    description: "Bald-headed like the Magic Eraser guy",
    backStory: "Like Batman, but parents were given swirlies",
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Alaska Man",
    herotype: { _id: "5b21ca3eeb7f6fbccd471818", type: "Hero" },
    power: "Helps Tourists in Alaska",
    comicsAppearedIn: 100,
    description: "Tall, maybe like 6'2. Long flowing hair. Likes walks on the beach",
    backStory: "Moved to Alaska, wanting to settle down. However, he always hears tourists in his 'backyard'. He must help them, it's in his blood.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Fizz",
    herotype: { _id: "5b21ca3eeb7f6fbccd471818", type: "Hero" },
    power: "Instantly learns anything, then after he's done, immediately forgets it.",
    comicsAppearedIn: 8,
    description: "A big fish that has 2 legs instead of a fin. Has a trident. Not to be confused with Aquaman or King Triton from 'The Little Mermaid'.",
    backStory: "Simple man who loved life, got turned into a fish because reasons. The only skill he can not forget is playing a drumset. On the stage they call him 'Fish Sticks'.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Tom",
    herotype: { _id: "5b21ca3eeb7f6fbccd471814", type: "Villain" },
    power: "Chases Jerry, but always fails",
    comicsAppearedIn: 7,
    description: "Tomcat, probably like 4 feet tall on hind legs",
    backStory: "Tom has a hate/love relationship with Jerry. He will always attempt to chase and kill Jerry, but will never do so, because he loves the thrill of the hunt. No Jerry, no hunt.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "the Noodler",
    herotype: { _id: "5b21ca3eeb7f6fbccd471814", type: "Villain" },
    power: "Noodle",
    comicsAppearedIn: 7,
    description: "Has dreadlocks. Whips up a mean ramen platter.",
    backStory: "Was once denied a bowl of ramen. Makes her enemies eat her ramen",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "The Egg ",
    herotype: { _id: "5b21ca3eeb7f6fbccd471818", type: "Hero" },
    power: "Egg",
    comicsAppearedIn: 7,
    description: "Egg",
    backStory: "Offers eggs in trying times",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Rad Chad",
    herotype: { _id: "5b21ca3eeb7f6fbccd471814", type: "Villain" },
    power: "Radioactive Chadioactive",
    comicsAppearedIn: 7,
    description: "Hype man. Bad at it",
    backStory: "Always looked up to and always feared, for his hype man skills are so good his friends and enemies get hyped to death",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "Bikeman",
    herotype: { _id: "5b21ca3eeb7f6fbccd471818", type: "Hero" },
    power: "Turns into a bicycle.",
    comicsAppearedIn: 4,
    description: "Mountain, 24-inch wheels. Really fast.",
    backStory: "Got radded by Rad Chad as a cycle while on a bicycle. She now helps others escape for she can turn into a bicycle.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Lil V",
    herotype: { _id: "5b21ca3eeb7f6fbccd471814", type: "Villain" },
    power: "Vendetta",
    comicsAppearedIn: 7,
    description: "5'10, wicked nice muscles",
    backStory: "Revenge, grudge, avenge. Any of these Lil V can sense and will seek it out and execute it.",
  }
];

export function getHeroes() {
  return heroes;
}

export function getHero(id) {
  return heroes.find(h => h._id === id);
}

export function saveHero(hero) {
  let heroInDb = heroes.find(h => h._id === hero._id) || {};
  heroInDb.name = hero.name;
  heroInDb.herotype = heroAPI.herotypes.find(h => h._id === hero.herotypeId);
  heroInDb.numberInStock = hero.numberInStock;
  heroInDb.dailyRentalRate = hero.dailyRentalRate;

  if (!heroInDb._id) {
    heroInDb._id = Date.now();
    heroes.push(heroInDb);
  }

  return heroInDb;
}

export function deleteHero(id) {
  let heroInDb = heroes.find(h => h._id === id);
  heroes.splice(heroes.indexOf(heroInDb), 1);
  return heroInDb;
}
