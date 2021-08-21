// TODO: write your code here
export default function healthSort(heroes) {
  return heroes.sort((a, b) => {
    if (a.health < b.health) { return 1; }
    return -1;
  });
}
