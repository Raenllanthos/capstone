export const herotypes = [
  { _id: "5b21ca3eeb7f6fbccd471818", type: "Hero" },
  { _id: "5b21ca3eeb7f6fbccd471814", type: "Villain" },
];

export function getHeroType() {
  return herotypes.filter(h => h);
}
