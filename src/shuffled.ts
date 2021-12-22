import * as A from '@prelude/array'

const shuffled =
  <T>(set: Set<T>): T[] =>
    A.shuffle(Array.from(set))

export default shuffled
