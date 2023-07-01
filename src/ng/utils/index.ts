export function* range(from: number, to: number) {
  for (let idx = from; idx < to; idx++) yield idx;
}
