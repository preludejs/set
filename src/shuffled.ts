import Arrays from '@prelude/array'

const shuffled =
  <T>(set: Set<T>): T[] =>
    Arrays.shuffle(Array.from(set))

export default shuffled
