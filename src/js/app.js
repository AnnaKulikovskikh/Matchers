// TODO: write your code here
export default function healthSort(heroes) {
  return heroes.sort((a, b) => a.health < b.health ? 1 : -1);
}
