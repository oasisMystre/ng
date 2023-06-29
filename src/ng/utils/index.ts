export function range(from: number, to: number) {
  const list: number[] = [];

  for (let idx = from; idx < to; idx++) list.push(idx);

  return list;
}
