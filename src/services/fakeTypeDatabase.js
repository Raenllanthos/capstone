export const heroTypes = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Hero" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Villain" },
];

export function getHeroType() {
  return heroTypes.filter(h => h);
}
